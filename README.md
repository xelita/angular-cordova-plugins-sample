angular-cordova-plugins-sample
==============================

Sample app demonstrating angular-cordova plugins usage based on ionic framework.

Usage
-----

1. Ionic npm module needs to be installed on your local machine
```js
npm install -g ionic 
```

2. In the app folder, type:
```js
ionic platform add ios

cordova plugin add org.apache.cordova.console
cordova plugin add org.apache.cordova.device
cordova plugin add org.apache.cordova.device-motion
cordova plugin add org.apache.cordova.inappbrowser
cordova plugin add org.apache.cordova.statusbar
cordova plugin add org.apache.cordova.vibration
cordova plugin add org.apache.cordova.geolocation
cordova plugin add org.apache.cordova.network-information
```

To play with the application on iOS simulator, type:
```js
ionic emulate ios
```

To play with the application on your iOS device, type
```js
ionic run ios
```