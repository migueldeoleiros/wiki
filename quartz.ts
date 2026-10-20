import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { ArticleTitle } from "@quartz-community/article-title"
import { Breadcrumbs } from "@quartz-community/breadcrumbs"
import { ContentMeta } from "@quartz-community/content-meta"
import { Darkmode } from "@quartz-community/darkmode"
import { Explorer } from "@quartz-community/explorer"
import { PageTitle } from "@quartz-community/page-title"
import { Search } from "@quartz-community/search"
import { Spacer } from "@quartz-community/spacer"
import Flex from "./quartz/components/Flex"
import MobileOnly from "./quartz/components/MobileOnly"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"

const config = await loadQuartzConfig()
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
      components: [{ Component: Search(), grow: true }, { Component: Darkmode() }],
    }),
    Explorer(),
  ],
  right: [],
}
layout.byPageType.folder = listLayout
layout.byPageType.tag = listLayout

// The config loader constructs its own dispatcher before these overrides exist.
// Replace it so the build uses this same layout, not the loader's earlier copy.
config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
