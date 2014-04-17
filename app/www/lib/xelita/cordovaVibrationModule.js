/**
 * Angular Module relying on Apache Cordova Vibration Plugin (cordova plugin add org.apache.cordova.vibration).
 */
var cordovaVibrationModule = angular.module('cordovaVibrationModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaVibrationModule.constant('cordovaVibrationConstants', {
    apiVersion: '1.0.0',
    cordovaVersion: '>=3.4.0'
});

// Services

/**
 * Main service relying on Apache Cordova Vibration Plugin.
 */
cordovaVibrationModule.factory('cordovaVibrationService', ['$log', 'cordovaVibrationConstants', function ($log, cordovaVibrationConstants) {
    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaVibrationService.apiVersion.');
            return cordovaVibrationConstants.apiVersion;
        },

        /**
         * Return the cordova API version.
         */
        cordovaVersion: function () {
            $log.debug('cordovaVibrationService.cordovaVersion.');
            return cordovaVibrationConstants.cordovaVersion;
        },

        /**
         * Vibrates the device for the specified amount of time.
         * For more informations: https://github.com/apache/cordova-plugin-vibration.
         */
        vibrate: function (milliseconds) {
            $log.debug('cordovaVibrationService.vibrate.');
            if (!navigator.notification) {
                $log.warn('Vibration API is not available.');
                return;
            }
            navigator.notification.vibrate(milliseconds);
        }
    };
}]);


