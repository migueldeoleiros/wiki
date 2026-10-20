// Circular reveal adapted from miguel.md/src/scripts/themeToggle.ts.
// Retain Quartz's saved-theme attribute, storage key, and themechange event.
const root = document.documentElement
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
let initialTheme = systemTheme.matches ? "dark" : "light"
try {
  const stored = localStorage.getItem("theme")
  if (stored === "dark" || stored === "light") initialTheme = stored
} catch {
  // Theme switching still works when browser storage is unavailable.
}
root.setAttribute("saved-theme", initialTheme)

let transitioning = false
let cleanupToggle: (() => void) | undefined

function setupThemeToggle() {
  cleanupToggle?.()
  const controller = new AbortController()
  const { signal } = controller
  const buttons = document.querySelectorAll<HTMLButtonElement>(".darkmode")

  function updateButtons() {
    const dark = root.getAttribute("saved-theme") === "dark"
    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(dark))
      button.title = dark ? "Use light mode" : "Use dark mode"
      button.setAttribute("aria-label", button.title)
    }
  }

  function syncTheme() {
    const theme = root.getAttribute("saved-theme") === "dark" ? "dark" : "light"
    document.body.classList.remove("theme-dark", "theme-light")
    document.body.classList.add(`theme-${theme}`)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#151515" : "#efeee8")
    updateButtons()
  }

  function applyTheme(theme: "dark" | "light") {
    root.setAttribute("saved-theme", theme)
    try {
      localStorage.setItem("theme", theme)
    } catch {
      // Do not let blocked storage interrupt the transition.
    }
    syncTheme()
    document.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }))
  }

  async function toggleTheme(event: MouseEvent) {
    if (transitioning) return
    const next = root.getAttribute("saved-theme") === "dark" ? "light" : "dark"
    const apply = () => applyTheme(next)

    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply()
      return
    }

    const button = event.currentTarget as HTMLButtonElement
    const rect = button.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
    root.style.setProperty("--theme-x", `${x}px`)
    root.style.setProperty("--theme-y", `${y}px`)
    root.style.setProperty("--theme-radius", `${radius}px`)
    root.classList.add(next === "dark" ? "theme-transition-expand" : "theme-transition-retract")
    transitioning = true
    try {
      const transition = document.startViewTransition(apply)
      await Promise.all([transition.ready, transition.finished])
    } catch {
      // A browser may skip the animation (e.g. during SPA navigation).
      if (root.getAttribute("saved-theme") !== next) apply()
    } finally {
      root.classList.remove("theme-transition-expand", "theme-transition-retract")
      transitioning = false
    }
  }

  syncTheme()
  for (const button of buttons) button.addEventListener("click", toggleTheme, { signal })
  systemTheme.addEventListener("change", (event) => applyTheme(event.matches ? "dark" : "light"), {
    signal,
  })
  cleanupToggle = () => controller.abort()
  window.addCleanup(cleanupToggle)
}

document.addEventListener("nav", setupThemeToggle)
document.addEventListener("render", setupThemeToggle)
