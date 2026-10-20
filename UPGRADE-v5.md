# Quartz v5 upgrade

Upgraded **4.5.2 → 5.0.0**, based on upstream `v5` commit
`97a2d05f80c4c50534959b1d0d41cc4b3895625e`.
The site is maintained on branch `v5`; the existing `v4` branch is retained
unchanged as a rollback reference.

## What changed

- Site settings, plugin options, and default layout now live in `quartz.config.yaml`
  instead of `quartz.config.ts` and `quartz.layout.ts`.
- Features are independent `@quartz-community/*` npm packages. This upstream
  revision pins installed versions in `package-lock.json`; it does not need a
  Git-plugin `quartz.lock.json`.
- Rendering uses page types and frames. `quartz.ts` preserves the separate
  note/list layouts, including the list-page explorer on the left.
- v5 normalizes URLs to lowercase. Case redirects are enabled to retain old
  mixed-case URLs; existing lowercase note filenames need no renaming.
- Upstream adds improved Obsidian support, plugin extensibility, and hot reload.
  Optional Canvas/Bases pages, comments, reader mode, encryption, and other new
  features are not enabled automatically for this site.
- Local development and the Pages workflow use Node 24. Plugin initialization is
  explicit in CI.

## Preserved

- All 109 Markdown notes, the `content/ox-hugo` symlink, and static image assets.
- Site title/domain, Umami analytics, fonts, light/dark palette, custom heading
  styles, footer links, SPA navigation, and popovers.
- ox-hugo/Org links and LaTeX, Obsidian/Roam syntax, hard line breaks, created-date
  preference, five recent notes, search, graph, explorer, backlinks, RSS, sitemap,
  and draft filtering. Social-image generation remains disabled.
- Custom global graph forces now use plugin options rather than a core patch.

Also corrected the invalid dark text-highlight color `#DFAD16288` to `#DFAD1688`
and the old `showByDefauylt` table-of-contents option typo. Generated empty
folder/tag pages are excluded from the content index/RSS and recent-note lists,
so they cannot crowd actual notes out of the feed.

## Run locally

```sh
npm ci
npm run install-plugins
npx quartz build --serve
```

## Deployment

Pushes to `v5` publish the live site through `.github/workflows/deploy.yml`.
It can also be run manually from Actions. Type checking and tests must pass
before the production build and deployment.

GitHub's default branch should be `v5`, and the `github-pages` environment's
deployment-branch policy must allow `v5`. Keep `v4` disallowed after cutover so
its old workflow cannot overwrite the live site. No DNS/custom-domain change is
needed. To roll back, explicitly re-allow `v4` and rerun a known-good deployment;
changing the default branch alone does not roll back the deployed site.

`.github/workflows/site-ci.yml` runs type checking, tests, and a production wiki
build on pushes and pull requests to `v5`. Unlike the imported upstream CI, it
runs in this repository. Content-wide formatting is not a CI gate because of
the existing formatting warnings described below.

## Verification and known issues

- Production build processes all 109 Markdown files successfully.
- All 163 upstream tests pass; TypeScript checking passes.
- Browser checks cover desktop/mobile home, note, folder/tag layouts, search, and
  dark-mode switching. No console errors were observed in those paths.
- `npm run check` still reports formatting issues in 98 existing content files;
  those notes were deliberately not reformatted.
- Safe dependency updates patched `sharp` and `source-map-js`. `npm audit` still
  reports four high-severity findings in the `globby` → `fast-glob`/`micromatch` →
  `braces` dependency chain. Normal `npm audit fix` does not resolve that chain;
  no forced dependency substitutions were applied.
- Some existing content links reference absent notes/images. Content was left
  unchanged rather than silently removing or rewriting those references.

Official migration guide: <https://quartz.jzhao.xyz/getting-started/migrating>.
