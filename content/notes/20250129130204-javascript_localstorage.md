---
title: "Javascript localStorage"
date: 2025-01-29T00:00:00+01:00
lastmod: 2025-01-29T00:00:00+01:00
tags: ["tech"]
draft: false
---

Links: [Javascript]({{< relref "20250129130118-javascript.md" >}})

This built-in browser feature lets you store key-value pairs as strings, persisting even after the browser is closed.
It's straightforward and widely supported.

Since localStorage only stores strings, if you need to save more complex data structures like objects or arrays, you'll need to serialize them using JSON.stringify() when saving and JSON.parse() when retrieving.


## Save data: {#save-data}

```javascript
localStorage.setItem('requestInterval', '5000'); // Save request interval as 5000 ms
localStorage.setItem('requestMode', 'mode1');    // Save request mode as 'mode1'
```


## Retrieve data: {#retrieve-data}

```javascript
const requestInterval = localStorage.getItem('requestInterval');
const requestMode = localStorage.getItem('requestMode');
```


## Remove data: {#remove-data}

```javascript
localStorage.removeItem('requestInterval');
localStorage.removeItem('requestMode');
```


## Clear all data: {#clear-all-data}

```javascript
localStorage.clear();
```
