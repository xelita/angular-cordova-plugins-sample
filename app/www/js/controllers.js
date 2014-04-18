angular.module('starter.controllers', ['cordovaVibrationModule', 'cordovaGeolocationModule'])

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
    })

