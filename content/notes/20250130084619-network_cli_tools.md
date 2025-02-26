---
title: "Network cli tools"
date: 2025-01-30T00:00:00+01:00
lastmod: 2025-02-25T00:00:00+01:00
tags: ["tools"]
draft: false
---

## arp-scan {#arp-scan}

Send ARP packets to hosts (specified as IP addresses or hostnames) to scan the local network.

-   Scan curreent local network:
    `arp-scan --localnet`

-   Scan an IP network with a custom bitmask
    `arp-scan 192.168.1.1/24`


## avahi-browse {#avahi-browse}

Check for mDNS devices in the network
`avahi-browse -ar`
`avahi-browse -at`


## ping {#ping}

Send ICMP echo requests to network hosts to test connectivity.

-   Ping a host:
    `ping example.com`

-   Ping with a specific number of packets (do it x amount of times):
    `ping -c 4 example.com`


## traceroute {#traceroute}

Print the route packets take to a network host.

-   Trace the route to a host:
    `traceroute example.com`


## netstat {#netstat}

Display network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.

-   List all ports:
    `netstat --all`

-   List all listening ports:
    `netstat --listening`

-   List listening TCP ports:
    `netstat --tcp`

-   Display PID and program names:
    `netstat --program`

-   List information continuously:
    `netstat --continuous`


## nmap {#nmap}

Network exploration tool and security scanner.

-   Scan a single IP:
    `nmap 192.168.1.1`

-   Scan a range of IPs:
    `nmap 192.168.1.1-20`


## tcpdump {#tcpdump}

Dump traffic on a network.

-   Capture packets from a specific interface:
    `tcpdump -i eth0`

-   Save captured packets to a file:
    `tcpdump -w file.pcap`
