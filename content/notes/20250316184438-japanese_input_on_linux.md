---
title: "Japanese input on Linux"
author: ["miguel"]
date: 2025-03-16T00:00:00+01:00
lastmod: 2025-03-16T00:00:00+01:00
tags: ["tools"]
draft: false
---

source: <https://wiki.archlinux.org/title/Fcitx5>
reference: <https://www.youtube.com/watch?v=lJoXhS4EUJs>


## Fcitx5 {#fcitx5}

On Arch Linux installation is straight forward:

```shell
sudo pacman -S fcitx5-im
```

This should install all the packages needed for the input method to work.

Also install the japanese engine:

```shell
sudo pacman -S fcitx5-mozc
```

You then have to add some things to your environment variables, if using zsh just add the next to `.zshenv`:

```shell
export QT_IM_MODULE='fcitx'
export SDL_IM_MODULE='fcitx'
export XMODIFIERS='@im=fcitx'
```

To configure it for japanese you need to open `fcitx5-configtool` and add the `Mozc` to the list of Input Methods.

Lastly you need to set the autostart up, the exact way to do this depends on your compositor, but you need to run this command on startup:

```shell
fcitx5 -d &
```

You should now me able to change to 日本語 input with `ctrl-<space>` おめでとう！
