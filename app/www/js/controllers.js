angular.module('starter.controllers', ['cordovaDeviceModule', 'cordovaDeviceMotionModule', 'cordovaNetworkInformationModule', 'cordovaVibrationModule', 'cordovaGeolocationModule'])

    // Application Controller

    .controller('AppCtrl', function ($scope) {
    })

    .controller('AboutCtrl', function ($scope) {

        $scope.resources = [
            {description: 'My LinkedIn Profile', url: 'http://fr.linkedin.com/in/bsempere'},
            {description: 'My GitHub Profile', url: 'http://github.com/xelita'},
            {description: 'My Technical Blog', url: 'http://theenlighteneddeveloper.com'}
        ];

        $scope.openUrl = function (url) {
            window.open(url, '_system');
        }
    })

    // Angular Cordova Plugin Device Motion

    .controller('DeviceMotionCtrl', function ($scope, $stateParams) {
        $scope.items = [
            {id: 1, name: 'API Version'},
            {id: 2, name: 'Cordova Version'},
            {id: 3, name: 'Get Current Acceleration'},
            {id: 4, name: 'Watch Current Acceleration'}
        ];
    })

    .controller('DeviceMotionDemoCtrl', function ($scope, $stateParams, cordovaDeviceMotionService) {

        $scope.demoIndex = $stateParams.itemId;

        // API demonstration

        $scope.apiVersion = cordovaDeviceMotionService.apiVersion();
        $scope.cordovaVersion = cordovaDeviceMotionService.cordovaVersion();

        $scope.getCurrentAcceleration = function () {
            cordovaDeviceMotionService.getCurrentAcceleration(successHandler, errorHandler);
        };

        $scope.startWatchingAcceleration = function () {
            $scope.watchId = cordovaDeviceMotionService.watchAcceleration(successHandler, errorHandler);
        };

        $scope.stopWatchingAcceleration = function () {
            cordovaDeviceMotionService.clearWatch($scope.watchId);
            $scope.watchId = null;
            $scope.currentAcceleration = null;
        };

        // Handlers

        var successHandler = function (acceleration) {
            $scope.currentAcceleration = acceleration;
        };

        var errorHandler = function (error) {
            alert(error);
        };
    })

    // Angular Cordova Plugin Device

    .controller('DeviceCtrl', function ($scope, $stateParams) {
        $scope.items = [
            {id: 1, name: 'API Version'},
            {id: 2, name: 'Cordova Version'},
            {id: 3, name: 'Device Cordova Version'},
            {id: 4, name: 'Device Platform'},
            {id: 5, name: 'Device UUID'},
            {id: 6, name: 'Device Version'},
            {id: 7, name: 'Device Model'}
        ];
    })

    .controller('DeviceDemoCtrl', function ($scope, $stateParams, cordovaDeviceService) {

        $scope.demoIndex = $stateParams.itemId;

        // API demonstration

        $scope.apiVersion = cordovaDeviceService.apiVersion();
        $scope.cordovaVersion = cordovaDeviceService.cordovaVersion();

        $scope.cordova = cordovaDeviceService.cordova();
        $scope.platform = cordovaDeviceService.platform();
        $scope.uuid = cordovaDeviceService.uuid();
        $scope.version = cordovaDeviceService.version();
        $scope.model = cordovaDeviceService.model();
    })

    // Angular Cordova Plugin Network Information

    .controller('NetworkInformationCtrl', function ($scope, $stateParams) {
        $scope.items = [
            {id: 1, name: 'API Version'},
            {id: 2, name: 'Cordova Version'},
            {id: 3, name: 'Network Connection Type'},
            {id: 4, name: 'Network Status Listener'}
        ];
    })

    .controller('NetworkInformationDemoCtrl', function ($scope, $stateParams, cordovaNetworkInformationService, cordovaNetworkInformationConstants) {

        $scope.demoIndex = $stateParams.itemId;

        // API demonstration

        $scope.apiVersion = cordovaNetworkInformationService.apiVersion();
        $scope.cordovaVersion = cordovaNetworkInformationService.cordovaVersion();

        $scope.connectionType = cordovaNetworkInformationService.getConnectionType();

        $scope.initNetworkStatusHandlers = function () {
            cordovaNetworkInformationService.addConnectionStatusChangedListener(cordovaNetworkInformationConstants.connectionStatusEvent.online, onOnline);
            cordovaNetworkInformationService.addConnectionStatusChangedListener(cordovaNetworkInformationConstants.connectionStatusEvent.offline, onOffline);
        };

        // Handlers

        function onOnline() {
            alert('You are online');
        }

        function onOffline() {
            alert('You are offline');
        }
    })

    // Angular Cordova Plugin Vibration

    .controller('VibrationCtrl', function ($scope, $stateParams) {
        $scope.items = [
            {id: 1, name: 'API Version'},
            {id: 2, name: 'Cordova Version'},
            {id: 3, name: 'Vibrate Action'}
        ];
    })

    .controller('VibrationDemoCtrl', function ($scope, $stateParams, cordovaVibrationService) {

        $scope.demoIndex = $stateParams.itemId;

        // API demonstration

        $scope.apiVersion = cordovaVibrationService.apiVersion();
        $scope.cordovaVersion = cordovaVibrationService.cordovaVersion();

        $scope.vibrate = function (ms) {
            cordovaVibrationService.vibrate(ms);
        };
    })

    // Angular Cordova Plugin Geolocation

    .controller('GeolocationCtrl', function ($scope, $stateParams) {
        $scope.items = [
            {id: 1, name: 'API Version'},
            {id: 2, name: 'Cordova Version'},
            {id: 3, name: 'Get Current Position'},
            {id: 4, name: 'Watch Current Position'}
        ];
    })

    .controller('GeolocationDemoCtrl', function ($scope, $stateParams, cordovaGeolocationService) {

        $scope.demoIndex = $stateParams.itemId;

        // API demonstration

        $scope.apiVersion = cordovaGeolocationService.apiVersion();
        $scope.cordovaVersion = cordovaGeolocationService.cordovaVersion();

        $scope.getCurrentPosition = function () {
            cordovaGeolocationService.getCurrentPosition(successHandler);
        };

        $scope.startWatchingPosition = function () {
            $scope.watchId = cordovaGeolocationService.watchPosition(successHandler);
        };

        $scope.stopWatchingPosition = function () {
            cordovaGeolocationService.clearWatch($scope.watchId);
            $scope.watchId = null;
            $scope.currentPosition = null;
        };

        // Handlers

        var successHandler = function (position) {
            $scope.currentPosition = position;
        };
    });

