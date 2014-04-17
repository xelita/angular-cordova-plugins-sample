angular.module('starter.controllers', ['cordovaVibrationModule'])

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
