# angular-cordova-plugins-sample

Sample app demonstrating [Apache Cordova](https://cordova.apache.org) (also known as [Adobe PhoneGap](http://phonegap.com)) plugins usage in an [AngularJS](http://angularjs.org) context...

The application is also based on the [Ionic Framework](http://ionicframework.com).

## Quick start

+ Ionic npm module needs to be installed on your local machine
>
``` bash
$ npm install -g ionic 
```

+ In the app folder, type:
>
``` bash
$ ionic platform add ios

$ cordova plugin add org.apache.cordova.console
$ cordova plugin add org.apache.cordova.device
$ cordova plugin add org.apache.cordova.device-motion
$ cordova plugin add org.apache.cordova.inappbrowser
$ cordova plugin add org.apache.cordova.statusbar
$ cordova plugin add org.apache.cordova.vibration
$ cordova plugin add org.apache.cordova.geolocation
$ cordova plugin add org.apache.cordova.network-information
```

+ To play with the application on iOS simulator, type:
>
``` bash
ionic emulate ios
```

+ To play with the application on your favorite iOS device, type
>
``` bash
ionic run ios
```

## Copyright and license

    The MIT License (MIT)

    Copyright (c) 2014 The Enlightened Developer

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
