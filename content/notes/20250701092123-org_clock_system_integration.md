---
title: "org-clock system integration"
date: 2025-07-01T00:00:00+02:00
lastmod: 2025-07-03T00:00:00+02:00
tags: ["emacs"]
draft: false
---

Org-clock allows you to track time spent on your org-mode TODOs, but when multitasking it can be hard to know which task are you currently clocking, and is easy to forget about stopping and starting the tracking.

For this I've written a small script that simply return the current task as a string followed by the time the clock was started

```shell
emacsclient --eval '
(if (and (fboundp '\''org-clocking-p) (org-clocking-p))
    (format "%s (%s)"
            org-clock-heading
            (org-format-time-string "%H:%M" org-clock-start-time))
  "No ongoing task")' | sed 's/^"//;s/"$//'
emacsclient --eval '
(or
 (when (org-clocking-p)
   (format "%s (%s)"
           org-clock-heading
           (org-format-time-string "%H:%M" org-clock-start-time)))
 "No task ongoing")' | sed 's/^"//;s/"$//'
```

The script first checks if the function `org-clocking-p` is defined, and then obtains the heading and time, additional logic is only added for removing quote marks with `sed` and adding a fallback message when no task is ongoing.

I use this script to show the current task in my taskbar, in this case using `eww`, since it's also fairly easy to add some interactivity to eww, I also implemented the next script to open the current task or agenda when you click on it.

```shell
emacsclient --create-frame --eval '
(if (org-clocking-p)
    (org-clock-goto)
  (run-at-time "0.1 sec" nil
               (lambda ()
                 (org-agenda nil "n")
                 (delete-other-windows))))'
```

The first part is quite simple, it opens the current clocked task after creating a frame.
If no current task is clocked, it opens `org-agenda` with the "n" option, but since the agenda view always opens on a split, I added `delete-other-windows`, the whole thing with the delay was needed to prevent the function to run before the frame is rendered.
