import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "migueldeoleiros' wiki",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "umami",
      host: "https://cloud.umami.is",
      websiteId: "335fb0c8-cfb6-4355-b584-78feaff7fb33"
    },
    locale: "en-US",
    baseUrl: "wiki.migueldeoleiros.com",
    ignorePatterns: ["private", "templates", ".obsidian", ".org"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Merriweather Sans",
        body: "Source Sans Pro",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#D4DAE8",
          lightgray: "#AFB4C0",
          gray: "#404159",
          darkgray: "#242532",
          dark: "#13141B",
          secondary: "#0F3D99",
          tertiary: "#0F8499",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#DDC16E88",
        },
        darkMode: {
          light: "#090a11",
          lightgray: "#242532",
          gray: "#404159",
          darkgray: "#AFB4C0",
          dark: "#D4DAE8",
          secondary: "#7BA3F4",
          tertiary: "#51BACD",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#DFAD16288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.OxHugoFlavouredMarkdown({ replaceOrgLatex: true }),
      Plugin.RoamFlavoredMarkdown(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ showByDefauylt: true }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.HardLineBreaks(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
