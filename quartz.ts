import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { ArticleTitle } from "@quartz-community/article-title"
import { Breadcrumbs } from "@quartz-community/breadcrumbs"
import { ContentMeta } from "@quartz-community/content-meta"
import { Explorer } from "@quartz-community/explorer"
import { PageTitle } from "@quartz-community/page-title"
import { Search } from "@quartz-community/search"
import { Spacer } from "@quartz-community/spacer"
import Flex from "./quartz/components/Flex"
import MobileOnly from "./quartz/components/MobileOnly"
import MonochromeEmoji from "./quartz/components/MonochromeEmoji"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"
import { componentRegistry } from "./quartz/components/registry"
import type { QuartzComponentConstructor } from "./quartz/components/types"
// @ts-ignore -- Quartz bundles inline browser scripts as strings.
import darkmodeScript from "./quartz/components/scripts/darkmode.inline"

const config = await loadQuartzConfig()
// Use the registered instance: the package root and /components exports bundle
// separate copies. Importing the root too would ship two competing toggle scripts.
const registeredDarkmode = componentRegistry.get("Darkmode")
if (!registeredDarkmode) throw new Error("Darkmode component is not registered")
const darkmode = componentRegistry.instantiate(
  registeredDarkmode.component as QuartzComponentConstructor,
)
darkmode.beforeDOMLoaded = darkmodeScript

export default config
export const layout = await loadQuartzLayout()

// Preserve the v4 list-page layout: explorer on the left, no right sidebar.
const listLayout = {
  ...layout.defaults,
  beforeBody: [Breadcrumbs(), ArticleTitle(), ContentMeta()],
  left: [
    PageTitle(),
    MobileOnly(Spacer()),
    Flex({
      components: [{ Component: Search(), grow: true }, { Component: darkmode }],
    }),
    Explorer(),
  ],
  right: [],
}
layout.byPageType.folder = listLayout
layout.byPageType.tag = listLayout

// Include the presentation normalizer on article, folder, and tag layouts.
const monochromeEmoji = MonochromeEmoji()
const afterBody = layout.defaults.afterBody ?? []
for (const pageLayout of new Set([layout.defaults, ...Object.values(layout.byPageType)])) {
  pageLayout.afterBody = [...(pageLayout.afterBody ?? afterBody), monochromeEmoji]
}

// The config loader constructs its own dispatcher before these overrides exist.
// Replace it so the build uses this same layout, not the loader's earlier copy.
config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
