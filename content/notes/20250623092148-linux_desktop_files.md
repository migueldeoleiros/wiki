---
title: "Linux Desktop entry files"
date: 2025-06-23T00:00:00+02:00
lastmod: 2025-06-25T00:00:00+02:00
tags: ["tech"]
draft: false
---

Links: <https://specifications.freedesktop.org/desktop-entry-spec/latest/index.html#introduction>

.desktop files, or Desktop entries can be useful for creating  quick access to user scripts of manually installed applications.


## Types {#types}

In addition to the mentioned application launcher, desktop entries can be of type `Link` and `Directory`

-   `Type=Application` used for defining how to launch an application
-   `Type=Link` Used for defining a shortcut for opening a url in the browser
-   `Type=Directory` Used for defining directory metadata, this are located in the given directory with the `.directory`


## Location {#location}

.desktop files can be located in:
`/usr/share/applications`
`~/.local/share/applications`


## Sample file {#sample-file}

```desktop
[Desktop Entry]

Type=Application

Name=Application name

GenericName=Application #generic name, like "text editor"

# A comment which can/will be used as a tooltip
Comment=Flash card based learning tool

# The path to the folder in which the executable is run
Path=/path/to/working/dir

# The executable of the application, or command
Exec=command

Icon=/path/to/icon.png #can be png/svg/ico/icns

Terminal=false #otherwise runs on default terminal

Categories=Education;Languages;Java; #categories of the app
```


## Commands {#commands}

```shell
dekstop-file-validate sample.desktop
```

```shell
desktop-file-install --dir=$HOME/.local/share/applications ~/sample.desktop
```

```shell
update-desktop-database ~/.local/share/applications
```


## All recognized properties {#all-recognized-properties}

<https://specifications.freedesktop.org/desktop-entry-spec/latest/recognized-keys.html>
