/**
 * Angular Module relying on Apache Cordova DeviceMotion Plugin (cordova plugin add org.apache.cordova.device-motion).
 */
var cordovaDeviceMotionModule = angular.module('cordovaDeviceMotionModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaDeviceMotionModule.constant('cordovaDeviceMotionConstants', {
    apiVersion: '1.0.0',
    cordovaVersion: '>=3.4.0'
});

// Services

/**
 * Main service relying on Apache Cordova Device Motion Plugin.
 */
cordovaDeviceMotionModule.factory('cordovaDeviceMotionService', ['$rootScope', '$log', 'cordovaDeviceMotionConstants', function ($rootScope, $log, cordovaDeviceMotionConstants) {
    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaDeviceMotionService.apiVersion.');
            return cordovaDeviceMotionConstants.apiVersion;
        },

        /**
         * Return the cordova API version.
         */
        cordovaVersion: function () {
            $log.debug('cordovaDeviceMotionService.cordovaVersion.');
            return cordovaDeviceMotionConstants.cordovaVersion;
        },

        /**
         * Check the DeviceMotion plugin availability.
         * @returns {boolean}
         */
        checkDeviceMotionAvailability: function () {
            $log.debug('cordovaDeviceMotionService.checkDeviceMotionAvailability.');
            if (!navigator.accelerometer) {
                $log.warn('DeviceMotion API is not available.');
                return false;
            }
            return true;
        },

        /**
         * Get the current acceleration along the x, y, and z axes.
         * For more information: https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md#navigatoraccelerometergetcurrentacceleration
         */
        getCurrentAcceleration: function (successCallback, errorCallback) {
            $log.debug('cordovaDeviceMotionService.getCurrentAcceleration.');

            // Checking API availability
            if (!this.checkDeviceMotionAvailability()) {
                return;
            }

            // API call
            navigator.accelerometer.getCurrentAcceleration(
                function (acceleration) {
                    $rootScope.$apply(successCallback(acceleration));
                },
                function (error) {
                    $rootScope.$apply(errorCallback(error));
                }
            );
        },

        /**
         * Retrieves the device's current Acceleration at a regular interval, executing the accelerometerSuccess callback function each time.
         * For more information: https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md#navigatoraccelerometerwatchacceleration
         */
        watchAcceleration: function (successCallback, errorCallback, options) {
            $log.debug('cordovaDeviceMotionService.watchAcceleration.');

            // Checking API availability
            if (!this.checkDeviceMotionAvailability()) {
                return null;
            }

            // API call
            return navigator.accelerometer.watchAcceleration(
                function (acceleration) {
                    $rootScope.$apply(successCallback(acceleration));
                },
                function (error) {
                    $rootScope.$apply(errorCallback(error));
                },
                options
            );
        },

        /**
         * Stop watching the Acceleration referenced by the watchID parameter.
         * For more information: https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md#navigatoraccelerometerclearwatch
         */
        clearWatch: function (watchID) {
            $log.debug('cordovaDeviceMotionService.clearWatch.');

            // Checking API availability
            if (!this.checkDeviceMotionAvailability()) {
                return;
            }

            // API call
            navigator.accelerometer.clearWatch(watchID);
        }
    };
}]);


