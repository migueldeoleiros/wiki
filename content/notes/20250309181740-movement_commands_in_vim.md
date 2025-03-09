---
title: "Movement commands in Vim"
author: ["miguel"]
date: 2025-03-09T00:00:00+01:00
lastmod: 2025-03-09T00:00:00+01:00
tags: ["vim"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})

One of the key functions of Vim is that when using it you won't ever need to touch a mouse. You may be used to the arrow keys, and you can also use them here, but when editing text quickly the best way to move around is with **hjkl**

**hjkl** is the Vim equivalent of the gamer's **wasd**

```txt
┏━━━━━━━━━━━┓
┃     ↑     ┃
┃     k     ┃
┃ ← h   l → ┃
┃     j     ┃
┃     ↓     ┃
┗━━━━━━━━━━━┛
```

Vim divides the text in units, one unit could be a character, but it could also be a word or a line.

| unit      | jump to start | jump to finish |
|-----------|---------------|----------------|
| word      | **b**         | **e**          |
| line      | **0**         | **$**          |
| paragraph | **{**         | **}**          |
| file      | **gg**        | **G**          |
| window    | **H**         | **L**          |

For words we have a couple more commads that can be useful for more granular control.

| Key   | Description                  |
|-------|------------------------------|
| **w** | go to start of the next word |
| **W** | go to start of the next WORD |
| **e** | go to end of the next word   |
| **E** | go to end of the next WORD   |
| **b** | go to previous (back) word   |
| **B** | go to previous (back) WORD   |

The differences between a _word_ and a _WORD_ in Vim is that the first one can be separated by characters like `.` or `-`
A _WORD_ will be limited only by whitespaces, so `hello-world` will be one _WORD_ but two _words_

You can also move to the matching pair of (), {}. or [], by pressing **%**.

> [!info] Related post
> For moving to specific words or characters in the file check out [Search in Vim]({{< relref "20250309200126-search_in_vim.md" >}})
