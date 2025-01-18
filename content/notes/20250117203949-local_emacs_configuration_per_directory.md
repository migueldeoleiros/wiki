---
title: "local emacs configuration per directory"
author: ["miguel"]
date: 2025-01-17T00:00:00+01:00
lastmod: 2025-01-17T00:00:00+01:00
draft: false
---

You can configure specific emacs configurations for directories like projects adding a `.dir-locals.el`
This allows for things like setting variables or enabling modes for files in a specific directory.
A good example of this is for exporting my org-roam notes to my [digital garden]({{< relref "20250116121552-digital_garden.md" >}}) that runs on [Quartz]({{< relref "20250117204422-quartz.md" >}}), I added the next to `~/notes/.dir-locals.el`:

```emacs-lisp
((org-mode . (
              (eval . (org-hugo-auto-export-mode))
              (org-hugo-base-dir . "~/projects/quartz/")
              (org-hugo-front-matter-format . "yaml")
              )))
```

You can also set this to run in subdirectories, for this case, if I wanted to run the previos code only in the `journal` directory it would be:

```emacs-lisp
(("journal" . ((org-mode . (
              (eval . (org-hugo-auto-export-mode))
              (org-hugo-base-dir . "~/projects/quartz/")
              (org-hugo-front-matter-format . "yaml")
              )))))
```
