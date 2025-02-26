---
title: "Multicast Domain Name System (mDNS)"
date: 2025-02-26T00:00:00+01:00
lastmod: 2025-02-26T00:00:00+01:00
tags: ["tech"]
draft: false
---

It resolves hostnames to IP addresses within small networks without a central DNS server.
mDNS is part of the Zeroconf (Zero Configuration Networking) protocol suite.


### How mDNS Works {#how-mdns-works}

-   Uses multicast UDP packets to query and respond to DNS requests.
-   Each device on the network listens for mDNS queries and responds if it knows the answer.


### Use Cases {#use-cases}

-   Ideal for small networks like home or small office environments.
-   Commonly used in IoT devices, printers, and network services discovery.

-   Simplifies network configuration.
-   Automatic service discovery.


## Implementations {#implementations}


### [Flutter]({{< relref "20250130142109-flutter.md" >}}) {#flutter--20250130142109-flutter-dot-md}

<https://pub.dev/packages/bonsoir>
Bonsoir is a Zeroconf library that allows you to discover network services and to broadcast your own. It's based on Android NSD and on Apple's popular framework Bonjour.
