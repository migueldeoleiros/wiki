---
title: "The Vim \"dot\" command"
author: ["miguel"]
date: 2025-03-10T00:00:00+01:00
lastmod: 2025-03-10T00:00:00+01:00
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})

You can repeat the last edit command by pressing **.**

For example is you execute **ciwhello&lt;ESC&gt;** this will replace the word you're over with hello. If you then move to a different word and press **.** that last command will be repeated and the word would also be changed to "hello".

You can do this as many times as you want as long as you don't use any other command in between.

The _dot_ command can also be used with the number modifier, that way **3.** will be the same as **...**.

> [!warning] When to use a macro instead
> The _dot_ command only repeat commands that modify the text, it wont repeat the movement commands, [macros]({{< relref "20250309200341-vim_macros.md" >}}) don't have that limitation.
