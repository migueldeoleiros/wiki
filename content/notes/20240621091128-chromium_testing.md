---
title: "Chromium testing"
date: 2024-06-21T00:00:00+02:00
lastmod: 2025-03-12T00:00:00+01:00
tags: ["chromium"]
draft: false
---

Links: [Chromium]({{< relref "20240621081829-chromium.md" >}})

You can use the next command to find the test target to build for a specific test file

```shell
gn refs out/Default --testonly=true --type=executable --all path/to/file.cc
```

This command returns a list of targets, that you can compile with `autoninja -C out/Default target`
To run the test just do `out/Default/target`
You can also run just an specific test of list of them adding an argument `--gtest_filter="BrowserListUnitTest.*"` this argument is just an example, don't just use that one


## Interactive UI tests {#interactive-ui-tests}

for wayland test you can't just run them like the other ones, since it need to use weston.
I was having some weird behavior because I was running them in xwayland, don't do that.
Instead run:

```shell
cd out/Default; ../../testing/xvfb.py --no-xvfb --use-weston ./interactive_ui_tests --ozone-platform=wayland --gtest_filter="MenuItemViewTestBasic2.*" --gtest_repeat=50; cd -
```
