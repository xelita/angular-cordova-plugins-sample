/**
 * Angular Module relying on Apache Cordova Geolocation Plugin (cordova plugin add org.apache.cordova.Geolocation).
 */
var cordovaGeolocationModule = angular.module('cordovaGeolocationModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaGeolocationModule.constant('cordovaGeolocationConstants', {
    apiVersion: '1.0.0',
    cordovaVersion: '>=3.4.0'
});

// Services

/**
 * Main service relying on Apache Cordova Geolocation Plugin.
 */
cordovaGeolocationModule.factory('cordovaGeolocationService', ['$rootScope', '$log', 'cordovaGeolocationConstants', function ($rootScope, $log, cordovaGeolocationConstants) {
    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaGeolocationService.apiVersion.');
            return cordovaGeolocationConstants.apiVersion;
        },

        /**
         * Return the cordova API version.
         */
        cordovaVersion: function () {
            $log.debug('cordovaGeolocationService.cordovaVersion.');
            return cordovaGeolocationConstants.cordovaVersion;
        },

        /**
         * Check the geolocation plugin availability.
         * @returns {boolean}
         */
        checkGeolocationAvailability: function () {
            $log.debug('cordovaGeolocationService.checkGeolocationAvailability.');
            if (!navigator.geolocation) {
                $log.warn('Geolocation API is not available.');
                return false;
            }
            return true;
        },

        /**
         * Returns the device's current position to the geolocationSuccess callback with a Position object as the parameter.
         * For more information: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md#navigatorgeolocationgetcurrentposition
         */
        getCurrentPosition: function (successCallback, errorCallback, options) {
            $log.debug('cordovaGeolocationService.getCurrentPosition.');

            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
                return;
            }

            // API call
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    $rootScope.$apply(successCallback(position));
                },
                function (error) {
                    $rootScope.$apply(errorCallback(error));
                },
                options
            );
        },

        /**
         * Returns the device's current position when a change in position is detected.
         * For more information: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md#navigatorgeolocationwatchposition
         */
        watchPosition: function (successCallback, errorCallback, options) {
            $log.debug('cordovaGeolocationService.watchPosition.');

            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
                return;
            }

            // API call
            return navigator.geolocation.watchPosition(
                function (position) {
                    $rootScope.$apply(successCallback(position));
                },
                function (error) {
                    $rootScope.$apply(errorCallback(error));
                },
                options
            );
        },

        /**
         * Stop watching for changes to the device's location referenced by the watchID parameter.
         * For more information: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md#navigatorgeolocationclearwatch
         */
        clearWatch: function (watchID) {
            $log.debug('cordovaGeolocationService.clearWatch.');

            // Checking API availability
            if (!this.checkGeolocationAvailability()) {
                return;
            }

            // API call
            navigator.geolocation.clearWatch(watchID);
        }
    };
}]);


