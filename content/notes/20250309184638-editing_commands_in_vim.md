---
title: "Editing commands in Vim"
author: ["miguel"]
date: 2025-03-09T00:00:00+01:00
lastmod: 2025-03-09T00:00:00+01:00
tags: ["vim"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})


## Commands {#commands}


### Replace/Change {#replace-change}

There are two different commands for replacing/changing text in Vim


#### Replace {#replace}

Using the replace command with **r** we enter into a special mode that allows up to input a single character, this will replace the character underneath the cursor.


#### Change {#change}

The change command is a bit more versatile, and it always needs to be combine in order to work (it wont do anythin with just **c**)
When using **c** you enter into _insert mode_ replacing the desired text.

| Command | Description                         |
|---------|-------------------------------------|
| **cc**  | change line                         |
| **cw**  | change word (from current position) |
| **ciw** | change inside word                  |
| **caw** | change around word                  |

More information of combining command in [Vim grammar]({{< relref "20250309190818-vim_grammar.md" >}})


### Copy {#copy}

Copy in Vim is called _yank_ and and the command for that is **y**.
You will also need to combine this command with [Vim grammar]({{< relref "20250309190818-vim_grammar.md" >}}) to make it work.

| Command | Description                                  |
|---------|----------------------------------------------|
| **yy**  | yank line                                    |
| **cw**  | yank word (from current position to the end) |


### Cut and Delete {#cut-and-delete}

Cut and Delete are conveniently the same command, this means, everything you delete will be saved in the Vim clipboard (more on that in [Vim registers]({{< relref "20250309193842-vim_registers.md" >}}))

| Command | Description                                     |
|---------|-------------------------------------------------|
| **dd**  | delete line                                     |
| **dw**  | delete word (from current position to the end)  |
| **d$**  | delete from current position to the end of line |


### Paste {#paste}

Paste works just as expected, with the command **p** you'll paste the last thing in your vim clipboard.
Although there are a lot of interesting uses when combined with [registers]({{< relref "20250309193842-vim_registers.md" >}})


## Using inside [Visual Mode]({{< relref "20250309175018-modes_in_vim#visual-mode" >}}) {#using-inside-visual-mode--20250309175018-modes-in-vim-dot-md}

You can also combine **c**, **y**, **p** and **d** with any of the _Visual modes_
If you enter _visual mode_ you'll be able to copy, replace and delete the text you select, also exiting back to _normal mode_


## Copy and pasting to the system's clipboard {#copy-and-pasting-to-the-system-s-clipboard}

Vim has an independet clipboard from the one in the rest of the system, which means you won't be able to copy or paste text between applications whithout a bit more work.

In order to access the system's clipboard you'll need to add **"+** before the command, **"+y** for copy and **"+p** for paste.

> [!tip] Bind this commands to something simpler
> In neovim you can use the next snippet to map it to **&lt;space&gt;y** and **&lt;space&gt;p**:
>
> ```lua
> vim.g.mapleader = " "
> vim.keymap.set("n", "<leader>y", "\"+y")
> vim.keymap.set("v", "<leader>y", "\"+y")
> vim.keymap.set("n", "<leader>p", "\"+p")
> ```
