---
title: "Submit CL to Chromium with gerrit"
date: 2024-07-02T00:00:00+02:00
lastmod: 2025-03-12T00:00:00+01:00
tags: ["tools", "chromium"]
draft: false
---

Links: [Chromium]({{< relref "20240621081829-chromium.md" >}})

<https://chromium.googlesource.com/chromium/src/+/HEAD/docs/contributing.md#Uploading-a-change-for-review>
<https://chromium.googlesource.com/chromium/src/+/HEAD/docs/commit_checklist.md>

to format the code correctly `git cl format`
to create the CL or add a new patch `git cl upload`


## To get code from a CL {#to-get-code-from-a-cl}

Replace the `X` with the appropriate numbers, you can get the fetch command from gerrit in the top right menu in "Download Patch"

```shell
git fetch https://chromium.googlesource.com/chromium/src refs/changes/XX/XXXXXXX/X
git checkout -b branchName FETCH_HEAD
git cl issue XXXXXXX
```

After this commands you should have a branch with the changes from the CL where you can make commits and upload them as usual
