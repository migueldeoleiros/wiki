---
title: "Bluetooth Low Energy"
date: 2025-05-08T00:00:00+02:00
lastmod: 2025-05-08T00:00:00+02:00
tags: ["tech"]
draft: false
---

## Notes on Bluetooth Low Energy (BLE) {#notes-on-bluetooth-low-energy--ble}

Bluetooth Low Energy (BLE) is a wireless communication technology designed for low power consumption, making it ideal for IoT devices, wearables, and other battery-powered applications.


### BLE devices can operate in two primary roles {#ble-devices-can-operate-in-two-primary-roles}


#### Central Mode {#central-mode}

The central device acts as a controller and initiates connections with peripheral devices.
Examples: Smartphones, tablets, or computers.


#### Peripheral Mode {#peripheral-mode}

The peripheral device advertises its presence and waits for a central device to connect.
Examples: Fitness trackers, smartwatches, or sensors.


### Information Sharing in BLE {#information-sharing-in-ble}

BLE supports two primary ways of sharing information: broadcasting and connections.


#### Broadcasting {#broadcasting}

In broadcasting, a BLE device sends out data packets without establishing a connection.
This is a one-way communication method where the device advertises its presence and shares limited data.

Data shared during broadcasting is typically limited to a small payload.

```python
# Example of a BLE advertising packet structure
advertising_packet = {
    "Flags": "General Discoverable Mode",
    "Manufacturer Specific Data": {
        "Company Identifier": "0x004C",  # Apple Inc.
        "Data": "Proximity UUID, Major, Minor"
    },
    "Complete Local Name": "MyBLEDevice",
    "Service UUIDs": ["0x180D"]  # Heart Rate Service
}
```

We can use the configurable nature of the advertising packet to out advantage, replacing the Manufacturer data with whatever information we want to transfer, and avoiding connections for small amounts of data.


#### Connections {#connections}

In a connection, a BLE central device establishes a two-way communication link with a peripheral device, this allows for more complex and secure data exchange.

1.  The central device reads or subscribes to the **Heart Rate Measurement** characteristic.
2.  The peripheral device sends the heart rate data to the central device.

<!--listend-->

```python
# Example of heart rate data in a BLE connection
heart_rate_data = {
    "Service UUID": "0x180D",  # Heart Rate Service
    "Characteristic UUID": "0x2A37",  # Heart Rate Measurement
    "Value": {
        "Flags": "0x01",  # Heart rate value format (e.g., 8-bit)
        "Heart Rate": 72  # Heart rate in beats per minute (BPM)
    }
}
```
