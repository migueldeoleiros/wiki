---
title: "Bluetooth Low Energy in Flutter"
date: 2025-05-08T00:00:00+02:00
lastmod: 2025-05-08T00:00:00+02:00
tags: ["tech"]
draft: false
---

Links: [Flutter]({{< relref "20250130142109-flutter.md" >}})

There are a couple of library options for managing bluetooth in flutter.


## FlutterBluePlus {#flutterblueplus}

reference: <https://pub.dev/packages/flutter_blue_plus>

This is the most popular library for managing bluetooth, and it's the most complete for BLE Central role, unfortunately it doesn't support Peripheral role


## FlutterBlePeripheral {#flutterbleperipheral}

reference: <https://pub.dev/packages/flutter_ble_peripheral>

Specific library for handling BLE peripheral mode, it supports Android well, and partially iOS


## bluetooth_low_energy {#bluetooth-low-energy}

reference: <https://pub.dev/packages/bluetooth_low_energy>

This is the most complete library, with support for most features in all the targets, both for BLE Central and Peripheral.

As of May 2025 the example for Android was giving some errors on compilation, due to some dependency mismatch.
We fixed it changing the java version for gradle

```diff
diff --git a/bluetooth_low_energy_android/example/android/app/build.gradle b/bluetooth_low_energy_android/example/android/app/build.gradle
index 3948192..936b020 100644
--- a/bluetooth_low_energy_android/example/android/app/build.gradle
+++ b/bluetooth_low_energy_android/example/android/app/build.gradle
@@ -29,8 +29,12 @@ android {
     ndkVersion = flutter.ndkVersion

     compileOptions {
-        sourceCompatibility = JavaVersion.VERSION_1_8
-        targetCompatibility = JavaVersion.VERSION_1_8
+        sourceCompatibility = JavaVersion.VERSION_17
+        targetCompatibility = JavaVersion.VERSION_17
+    }
+
+    kotlinOptions {
+        jvmTarget = '17'
     }

     defaultConfig {
diff --git a/bluetooth_low_energy_android/example/android/gradle/wrapper/gradle-wrapper.properties b/bluetooth_low_energy_android/example/android/gradle/wrapper/gradle-wrapper.properties
index e1ca574..5e6b542 100644
--- a/bluetooth_low_energy_android/example/android/gradle/wrapper/gradle-wrapper.properties
+++ b/bluetooth_low_energy_android/example/android/gradle/wrapper/gradle-wrapper.properties
@@ -2,4 +2,4 @@ distributionBase=GRADLE_USER_HOME
 distributionPath=wrapper/dists
 zipStoreBase=GRADLE_USER_HOME
 zipStorePath=wrapper/dists
-distributionUrl=https\://services.gradle.org/distributions/gradle-7.6.3-all.zip
+distributionUrl=https\://services.gradle.org/distributions/gradle-8.4-all.zip
diff --git a/bluetooth_low_energy_android/example/android/settings.gradle b/bluetooth_low_energy_android/example/android/settings.gradle
index 536165d..bd473bb 100644
--- a/bluetooth_low_energy_android/example/android/settings.gradle
+++ b/bluetooth_low_energy_android/example/android/settings.gradle
@@ -18,8 +18,8 @@ pluginManagement {

 plugins {
     id "dev.flutter.flutter-plugin-loader" version "1.0.0"
-    id "com.android.application" version "7.3.0" apply false
-    id "org.jetbrains.kotlin.android" version "1.7.10" apply false
+    id "com.android.application" version "8.2.1" apply false
+    id "org.jetbrains.kotlin.android" version "1.9.0" apply false
 }

 include ":app"
```
