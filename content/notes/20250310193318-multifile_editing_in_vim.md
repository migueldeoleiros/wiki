---
title: "Multifile editing in Vim"
author: ["miguel"]
date: 2025-03-10T00:00:00+01:00
lastmod: 2025-03-10T00:00:00+01:00
tags: ["vim"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})

We have a couple of way to execute actions in lists of files.


### Arguments list {#arguments-list}

`args` keeps a list of the arguments that were given on startup, but we can rewrite it or add elements to it

| command                 | description                                       |
|-------------------------|---------------------------------------------------|
| `:args file1 file2 ...` | to write files into the argument list.            |
| `:args *.txt`           | to write all `.txt` files into the argument list. |
| `:arga file.txt`        | to add a file into the argument list.             |

To execute a command in all files in the args list `:argdo command`


### Buffer list {#buffer-list}

Similarly you can execute a command on all opened buffers with `:bufdo command`


## Examples {#examples}

`:argdo %s/foo/bar/g | update` Replace "foo" with "bar" in all files and save changes.
`:argdo exe "normal @a" | update` Execute macro "a" in all files and save changes.
`:bufdo %s/foo/bar/gc | update` Prompt before replacing "foo" with "bar" in all open buffers and save.
`:bufdo exe '%!sort' | update` Execute shell command "sort" on all open bufferst, sorting all lines, and save.
