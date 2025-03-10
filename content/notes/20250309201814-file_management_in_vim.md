---
title: "File management in Vim"
author: ["miguel"]
date: 2025-03-09T00:00:00+01:00
lastmod: 2025-03-10T00:00:00+01:00
tags: ["vim"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})

Vim comes with a built in file manager called **netrw**, that allows for basic file navigation and management inside the editor.

You can open netrw by passing a directory as an argument when opening Vim, or with one of the next commands:

| command   | description                                                   |
|-----------|---------------------------------------------------------------|
| `:Ex`     | Open current directory in current Vim window                  |
| `:Ex dir` | Open &lt;dir&gt; in current Vim window                        |
| `:Sex`    | (yes, you read it right) like `:Ex` but in a horizontal split |
| `:Vex`    | Like `:Ex` but in a vertical split                            |
| `:Tex`    | Like `:Ex` but in a new tab                                   |

> [!tip] IDE like side file manager
> With `:40vs +Ex` you can open a small split on the left with the file manager.
> You can set `netrw_browse_split = 4` to open files in the previous split.


## Commands inside netrw {#commands-inside-netrw}

| command       | description      |
|---------------|------------------|
| &lt;Enter&gt; | open file in vim |
| D             | delete file      |
| R             | rename file      |
| X             | execute file     |
| %             | create new file  |

You can also use _visual mode_ to select multiple files
