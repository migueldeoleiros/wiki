---
title: "Undo, redo and time-travel in Vim"
date: 2025-03-09T00:00:00+01:00
lastmod: 2025-03-11T00:00:00+01:00
tags: ["vim"]
draft: false
---

Links: [Vim]({{< relref "20250309132443-vim.md" >}})

Vim undo and redo functions works for the most part as you would expect, you can press **u** in _normal mode_ to undo the last action and **Ctr-r** to redo it.
You can also use **u** with a number modifier like **3u** to undo 3 steps.


## time-travel {#time-travel}

Vim allow you to move back and forward on your file edits not only one by one, but also by time intervals, here are some examples:

| command        | description                        |
|----------------|------------------------------------|
| `:earlier 10m` | undo changes in last 10 minutes    |
| `:ea 2d`       | undo changes in last 2 days        |
| `:later 10m`   | redo changes in last 10 minutes    |
| `:lat 10s`     | redo changes in last 10 seconds    |
| `:ea 3f`       | undo changes in last 3 file writes |
