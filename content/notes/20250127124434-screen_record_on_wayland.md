---
title: "Screen record on Wayland"
date: 2025-01-27T00:00:00+01:00
lastmod: 2025-01-27T00:00:00+01:00
draft: false
---

## wf-recorder {#wf-recorder}

<https://github.com/ammen99/wf-recorder>
wf-recorder is a utility program for screen recording of wlroots-based compositors (more specifically, those that support wlr-screencopy-v1 and xdg-output). Its dependencies are ffmpeg, wayland-client and wayland-protocols.

It's usage is fairly simple:

This will record the selected area and save it at `recording.mkv`

```shell
wf-recorder -g "$(slurp)"
```

Output file can be controlled with `-f`

```shell
wf-recorder -g "$(slurp)" -f "test.mkv"
```
