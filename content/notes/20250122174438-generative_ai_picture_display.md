---
title: "Generative AI picture display"
date: 2025-01-22T00:00:00+01:00
lastmod: 2025-02-17T00:00:00+01:00
tags: ["projects", "ai"]
draft: false
---

Links: [Merlín Sofware]({{< relref "20250116111537-work.md" >}})


## Related notes {#related-notes}


### [Digital Signage]({{< relref "20250122085422-digital_signage.md" >}}) {#digital-signage--20250122085422-digital-signage-dot-md}


### [Digital Photo Frame]({{< relref "20250122143347-digital_picture_frame.md" >}}) {#digital-photo-frame--20250122143347-digital-picture-frame-dot-md}


### [Smart Mirror]({{< relref "20250122140748-smart_mirror.md" >}}) {#smart-mirror--20250122140748-smart-mirror-dot-md}


## Planning {#planning}

The plan is to develop a scalable software that allows for a small computer (like a Raspberry Pi nano) to run a client, that displays AI generated pictures.
The client should be able to receive voice commands that will process to generate a new picture.
To make it as flexible as possible, the client should run on a standard browser.
The server side should be able to run on a separate computer to allow a local AI model to generate the images.

A first draft of the possible architecture:
![](/ox-hugo/ai_photo_frame_diagram1.png)

We concluded that we want to avoid physical button, and use voice commands locally to control de generation of images, for that, a software like [Whisper]({{< relref "20250127084445-ai_speech_to_text#whisper" >}}) could translate the audio to text.
To control when the voice controls are activated, instead of a physical button, a wake word could be used (check this [discussion on github](https://github.com/ggerganov/whisper.cpp/discussions/190)), and [Voice Acticity Detection](https://github.com/gumblex/whisper_vad) (VAD) is also important to know when the command ends.
More complex configuration, like setting the desired server provider and changing modes can be left to an app (or webapp)
![](/ox-hugo/ai_photo_frame_diagram3.png)

There are two modes for the client, one that requests AI images from voice commands, and one that request a random image.
The carousel mode is going to have a timer associated that could be configured beforehand, and will request images every so often.
![](/ox-hugo/ai_photo_frame_sequence1.png)

The project divides into 3 codebases.


#### [frame_server](https://github.com/merlinsoftwaresl/frame_server) {#frame-server}

The server side written in python, it comunicates with the client through a WebSocket to provide images as requested.


#### [frame_client](https://github.com/merlinsoftwaresl/frame_client) {#frame-client}

The client written in Flutter, it sends requests to the server for images and displays them in screen.
Shows a QR on startup to allow for connection with the app.


#### [frame_app](https://github.com/merlinsoftwaresl/frame_app) {#frame-app}

The control app written in Flutter, it runs on a phone.
Connects to the client through an API REST and sends config options like speed of requests and server ip
Includes a QR reader for direct communication with the client, and initial connection
