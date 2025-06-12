---
title: "Check Point vpn in Linux"
date: 2025-06-12T00:00:00+02:00
lastmod: 2025-06-12T00:00:00+02:00
draft: false
---

Links: <https://support.checkpoint.com/results/sk/sk119772>


## Steps on Arch {#steps-on-arch}

1.  Enable multilib in `/etc/pacman.conf` adding this:

<!--listend-->

```cfg
[multilib]
In  clude = /etc/pacman.d/mirrorlist
```

1.  Update the packages with `sudo pacman -Syu`

2.  Install dependencies

<!--listend-->

```shell
# Install openjdk17
sudo pacman -S jdk17-openjdk

# Install certutil openssl xterm bzip2
sudo pacman -S nss openssl xterm bzip2

# Install 32bit libraries
sudo pacman -S lib32-pam lib32-libx11 lib32-gcc-libs
```


## Steps on Ubuntu {#steps-on-ubuntu}

```shell
apt update
# Install openjdk-17-jdk
apt install openjdk-17-jdk

# Install certutil openssl xterm bzip2
apt install certutil openssl xterm bzip2

# Install 32bit libraries
dpkg --add-architecture i386
apt update
apt install libpam0g:i386 libx11-6:i386 libstdc++6:i386
```


## Steps to connect {#steps-to-connect}

1.  Go to the VPN web using Firefox or Chrome (derivatives wont work) the url should be something like `https://192.168.10.10/sslvpn`
2.  go to `Native Applications > Settings` in the top right
3.  Download both SSL Network Extende and Check Point Mobile Access Portal Agent
4.  Make both files executable with `chmod +x file` and execute them
5.  Go back to the VPN page and click **connect**


## Troubleshooting {#troubleshooting}

Use the next command to check the logs of the process in the terminal

```shell
java --add-exports java.base/sun.security.provider=ALL-UNNAMED -jar /usr/bin/cshell/CShell.jar /tmp/cshell.fifo
```
