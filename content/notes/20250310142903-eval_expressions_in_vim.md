---
title: "Eval expressions in Vim"
date: 2025-03-10T00:00:00+01:00
lastmod: 2025-03-11T00:00:00+01:00
tags: ["vim"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})

You can quickly evaluate math expressions in Vim while in _insert mode_ or _command mode_

If you press **Ctr-r =** you'll enter an special mode, similar to _command mode_, you'll see a **=** below the mode-line.
In this mode you can write expressions like "2+2" and the result will be pasted in the current buffer.
