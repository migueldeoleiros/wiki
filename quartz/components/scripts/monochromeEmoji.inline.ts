// Explicit emoji presentation (VS16) can bypass monochrome fonts in browsers.
// Request text presentation (VS15) in rendered text only, never note source or inputs.
function normalizeEmojiPresentation(node: Node) {
  if (node instanceof Text) {
    if (node.parentElement?.closest("script, style, textarea, input, [contenteditable]")) return
    if (node.data.includes("\uFE0F")) node.data = node.data.replaceAll("\uFE0F", "\uFE0E")
    return
  }

  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT)
  let text: Node | null
  while ((text = walker.nextNode())) normalizeEmojiPresentation(text)
}

let emojiObserver: MutationObserver | undefined
function setupMonochromeEmoji() {
  emojiObserver?.disconnect()
  normalizeEmojiPresentation(document.body)
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "characterData") normalizeEmojiPresentation(mutation.target)
      else for (const node of mutation.addedNodes) normalizeEmojiPresentation(node)
    }
  })
  observer.observe(document.body, { childList: true, characterData: true, subtree: true })
  emojiObserver = observer
  window.addCleanup(() => observer.disconnect())
}

document.addEventListener("nav", setupMonochromeEmoji)
document.addEventListener("render", setupMonochromeEmoji)
