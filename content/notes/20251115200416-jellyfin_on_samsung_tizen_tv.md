---
title: "Jellyfin on Samsung Tizen TV"
date: 2025-11-15T00:00:00+01:00
lastmod: 2025-11-15T00:00:00+01:00
draft: false
---

links: <https://github.com/jellyfin/jellyfin-tizen>

There is an attempt at getting the Jellyfin app in the samsung store, but at the time of writing still with no success <https://github.com/jellyfin/jellyfin-tizen/issues/222>


## Manual installation {#manual-installation}

In order to install any custom app in the TV you'll need to enable **developer mode**
It seems that the [official docs](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html) are outdated at the time of writing this.
To enable it, I found that you have to go to the **apps** tab and then scroll down all the way and click on **app config**, on that interface, you can now click "1 2 3 4 5" and the menu to enable the developer mode will open.
If you don't have buttons on the remote controller, there should be a button to enable the virtual keyboard.

We can use this project that simplifies the process with a docker container, that compiles the whole thing, and sends it to the TV/
<https://github.com/Georift/install-jellyfin-tizen>

It seems that since Tizen 8 with One UI you can no longer install apps with generic certificates with no password.
To fix that, we could generate the certs with the samsung software, but there is this nice script that does it with no unnecessary UI.
<https://github.com/sreyemnayr/tizencertificates>

```shell
uv run tv --device-id "youTVid" --email "your@email.com" --cert-password "yourPassword"
```

Important regarding the TV device id, you can get it by holding the **pause** in the apps tab. You'll see a bunch of id, but try to find the "unique device" one.

You'll get your certs in the "certificates" folder.

Now, we can use the [install-jellyfin-fizen](https://github.com/Georift/install-jellyfin-tizen%20) script with your own certs

```shell
ocker run -v "./tizencertificates/certificates/author.p12":/certificates/author.p12 -v "./tizencertificates/certificates/distributor.p12":/certificates/distributor.p12 --rm ghcr.io/georift/install-jellyfin-tizen <the TV ip> Jellyfin "" "yourPassword"
```
