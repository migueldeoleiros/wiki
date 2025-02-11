---
title: "WebSocket in Flutter"
date: 2025-02-11T00:00:00+01:00
lastmod: 2025-02-11T00:00:00+01:00
tags: ["tech"]
draft: false
---

Links: [Flutter]({{< relref "20250130142109-flutter.md" >}})

source: <https://docs.flutter.dev/cookbook/networking/web-sockets>

As of Flutter 3.27, it doesn't support creating web socket servers, but it does support connecting to one making use of the `web_socket_channel` package.


## Example {#example}

```dart
  void _connectWebSocket() {
  channel = IOWebSocketChannel.connect('ws://192.168.68.242:8080');
  print('Attempting to connect to WebSocket...');

  channel!.stream.listen(
    (message) {
      print('Image received');
      _updateImage(message);
      try {
        channel!.sink.add("ACK");
        print('Acknowledgment sent.');
      } catch (error) {
        print('Failed to send ACK: $error');
      }
    },
    onDone: () {
      print('WebSocket closed. Reconnecting in 2 seconds...');
      _reconnect();
    },
    onError: (error) {
      print('WebSocket error: $error');
      _reconnect();
    },
  );

  carouselTimer = Timer.periodic(Duration(seconds: 10), (timer) {
    if (channel != null) {
      print('Requesting new image...');
      channel!.sink.add("REQUEST_IMAGE");
    }
  });
}

void _reconnect() {
  carouselTimer?.cancel();
  Future.delayed(Duration(seconds: 2), () {
    _connectWebSocket();
  });
}
```
