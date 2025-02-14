---
title: "Flutter StatefulWidget"
date: 2025-02-11T00:00:00+01:00
lastmod: 2025-02-11T00:00:00+01:00
tags: ["tech"]
draft: false
---

Links: [Flutter]({{< relref "20250130142109-flutter.md" >}})

Stateful widgets are dynamic and can change over time. They can be used for UI components that need to reflect varying data or respond to user interactions.


## Parameters {#parameters}

Parameters are passed through the constructor of the stateful widget.
you can access them with `widget.parameter`


## Best practices {#best-practices}

Use stateful widgets when the UI needs to change dynamically.
Keep immutable properties in the widget's constructor and mutable state in the `State` class
Use `setState()` to update mutable state and trigger rebuilds.


## Example {#example}

```dart
class MyWidget extends StatefulWidget {
  final String text;
  const MyWidget({Key? key, required this.text}) : super(key: key);

  @override
  State<MyWidget> createState() => _MyWidgetState();
}

class _MyWidgetState extends State<MyWidget> {
  bool _isExpanded = false;

  void _toggleExpand() {
    setState(() {
      _isExpanded = !_isExpanded;
    });
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _toggleExpand,
      child: Text(widget.text),
    );
  }
}
```
