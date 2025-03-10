---
title: "Splits and tabs in Vim"
author: ["miguel"]
date: 2025-03-09T00:00:00+01:00
lastmod: 2025-03-10T00:00:00+01:00
tags: ["vim"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})

Using Vim's built in splits and tabs allows you to share registers and copy text from one file to another without much trouble.


## Splits {#splits}

| command     | description                    |
|-------------|--------------------------------|
| **Ctr-w v** | make a vertical split          |
| **Ctr-w s** | make a horizontal split        |
| **Ctr-w h** | move to the split to the left  |
| **Ctr-w j** | move to the split below        |
| **Ctr-w k** | move to the split above        |
| **Ctr-w l** | move to the split to the right |
| **Ctr-w c** | close (remove) split           |


## Tabs {#tabs}

| command      | description                         |
|--------------|-------------------------------------|
| **Ctrl-w T** | move the current split to a new tab |
| **gt**       | move to the next tab                |
| **gT**       | move to the previous tab            |
