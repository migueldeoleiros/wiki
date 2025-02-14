---
title: "Android app development"
date: 2025-02-10T00:00:00+01:00
lastmod: 2025-02-10T00:00:00+01:00
tags: ["tech"]
draft: false
---

source: <https://wiki.archlinux.org/title/Android>


## Setup {#setup}

On Arch Linux there are a number of packages for the android tools, but the easiest way to install all the necessary packages is with `android-studio`.
The downside of this approach is that it will litter the home folder with things, includding `.android` (unavoidable) and `Android` which contains the installation of the SDK.
Command like tools are not installed by default, you need to add those from the sdk manager in the android studio GUI.

To get access to all the tools from the CLI add the next to `.zshenv`

```shell
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
