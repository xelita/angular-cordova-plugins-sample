/**
 * Angular Module relying on Apache Cordova Geolocation Plugin (cordova plugin add org.apache.cordova.device).
 */
var cordovaDeviceModule = angular.module('cordovaDeviceModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaDeviceModule.constant('cordovaDeviceConstants', {
    apiVersion: '1.0.0',
    cordovaVersion: '>=3.4.0'
});

// Services

/**
 * Main service relying on Apache Cordova Device Plugin.
 */
cordovaDeviceModule.factory('cordovaDeviceService', ['$log', 'cordovaDeviceConstants', function ($log, cordovaDeviceConstants) {
    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaDeviceConstants.apiVersion.');
            return cordovaDeviceConstants.apiVersion;
        },

        /**
         * Return the cordova API version.
         */
        cordovaVersion: function () {
            $log.debug('cordovaGeolocationService.cordovaVersion.');
            return cordovaDeviceConstants.cordovaVersion;
        },

        /**
         * Get the version of Cordova running on the device.
         * For more information: https://github.com/apache/cordova-plugin-device/blob/dev/doc/index.md#devicecordova
         */
        cordova: function () {
            $log.debug('cordovaDeviceService.cordova.');
            return this.getDeviceValue('cordova');
        },

        /**
         * Get the device's operating system name.
         * For more information: https://github.com/apache/cordova-plugin-device/blob/dev/doc/index.md#deviceplatform
         */
        platform: function () {
            $log.debug('cordovaDeviceService.platform.');
            return this.getDeviceValue('platform');
        },

        /**
         * Get the device's Universally Unique Identifier (UUID).
         * For more information: https://github.com/apache/cordova-plugin-device/blob/dev/doc/index.md#deviceuuid
         */
        uuid: function () {
            $log.debug('cordovaDeviceService.uuid.');
            return this.getDeviceValue('uuid');
        },

        /**
         * Get the operating system version.
         * For more information: https://github.com/apache/cordova-plugin-device/blob/dev/doc/index.md#deviceversion
         */
        version: function () {
            $log.debug('cordovaDeviceService.version.');
            return this.getDeviceValue('version');
        },

        /**
         * The device.model returns the name of the device's model or product.
         * For more information: https://github.com/apache/cordova-plugin-device/blob/dev/doc/index.md#devicemodel
         */
        model: function () {
            $log.debug('cordovaDeviceService.model.');
            return this.getDeviceValue('model');
        },

        /**
         * Return the device parameter value.
         * @param name the parameter name.
         */
        getDeviceValue: function (name) {
            $log.debug('cordovaDeviceService.value.');
            if (!window.device) {
                $log.warn('Device API is not available.');
                return null;
            }
            return window.device[name];
        }
    };
}]);