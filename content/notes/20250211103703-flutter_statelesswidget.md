---
title: "Flutter StatelessWidget"
date: 2025-02-11T00:00:00+01:00
lastmod: 2025-02-11T00:00:00+01:00
tags: ["tech"]
draft: false
---

Links: [Flutter]({{< relref "20250130142109-flutter.md" >}})

Stateless widgets are inmutable and don't store any mutable data. They can be used for UI components that don't require dynamic updates during runtime.


## Example {#example}

```dart
class MyButton extends StatelessWidget {
  final String label;
  const MyButton({required this.label});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {},
      child: Text(label),
    );
  }
}
```

You would call the widget this way:

```dart
MyButton(label: "Click Me")
```
