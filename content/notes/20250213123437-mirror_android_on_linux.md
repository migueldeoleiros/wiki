---
title: "Mirror Android on Linux"
date: 2025-02-13T00:00:00+01:00
lastmod: 2025-02-13T00:00:00+01:00
tags: ["tech"]
draft: false
---

Being able to mirror and control an android device on your desktop can be quite useful. It provides the convenience of virtualization with the advantages of real hardware.


## [scrcpy](https://github.com/Genymobile/scrcpy) {#scrcpy}

This application mirrors Android devices (video and audio) connected via USB or over TCP/IP, and allows to control the device with the keyboard and the mouse of the computer. It does not require any root access. It works on Linux, Windows and macOS.


### shortcuts {#shortcuts}

`Right-click` triggers BACK
`Middle-click` triggers HOME
`Alt+f toggles` fullscreen

**There are lots of shortcuts on the official docs**
source: <https://github.com/Genymobile/scrcpy/blob/master/doc/shortcuts.md>


### usage {#usage}

Documentation on [Github](https://github.com/Genymobile/scrcpy) is quite extensive and detailed, this are some of the main usage examples that they provide.
Other than sharing the screen you can control the whole phone and integrate this with scripts if needed.


#### Capture the screen in H.265 (better quality), limit the size to 1920, limit the frame rate to 60fps, disable audio, and control the device by simulating a physical keyboard: {#capture-the-screen-in-h-dot-265--better-quality--limit-the-size-to-1920-limit-the-frame-rate-to-60fps-disable-audio-and-control-the-device-by-simulating-a-physical-keyboard}

```shell
scrcpy --video-codec=h265 --max-size=1920 --max-fps=60 --no-audio --keyboard=uhid
scrcpy --video-codec=h265 -m1920 --max-fps=60 --no-audio -K  # short version
```


#### Start VLC in a new virtual display (separate from the device display): {#start-vlc-in-a-new-virtual-display--separate-from-the-device-display}

```shell
scrcpy --new-display=1920x1080 --start-app=org.videolan.vlc
```


#### Record the device camera in H.265 at 1920x1080 (and microphone) to an MP4 file: {#record-the-device-camera-in-h-dot-265-at-1920x1080--and-microphone--to-an-mp4-file}

```shell
scrcpy --video-source=camera --video-codec=h265 --camera-size=1920x1080 --record=file.mp4
```


#### Capture the device front camera and expose it as a webcam on the computer (on Linux): {#capture-the-device-front-camera-and-expose-it-as-a-webcam-on-the-computer--on-linux}

```shell
scrcpy --video-source=camera --camera-size=1920x1080 --camera-facing=front --v4l2-sink=/dev/video2 --no-playback
```


#### Control the device without mirroring by simulating a physical keyboard and mouse (USB debugging not required): {#control-the-device-without-mirroring-by-simulating-a-physical-keyboard-and-mouse--usb-debugging-not-required}

```shell
scrcpy --otg
```


#### Control the device using gamepad controllers plugged into the computer: {#control-the-device-using-gamepad-controllers-plugged-into-the-computer}

```shell
scrcpy --gamepad=uhid
scrcpy -G  # short version
```
