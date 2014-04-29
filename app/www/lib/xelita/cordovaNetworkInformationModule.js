/**
 * Angular Module relying on Apache Cordova Network Information Plugin (cordova plugin add org.apache.cordova.network-information).
 */
var cordovaNetworkInformationModule = angular.module('cordovaNetworkInformationModule', []);

// Constants

/**
 * Constants service used in the whole module.
 */
cordovaNetworkInformationModule.constant('cordovaNetworkInformationConstants', {
    apiVersion: '1.0.0',
    cordovaVersion: '>=3.4.0',
    connectionStatusEvent: {
        online: 'online',
        offline: 'offline'
    }
});

// Services

/**
 * Main service relying on Apache Cordova Network Information Plugin.
 */
cordovaNetworkInformationModule.factory('cordovaNetworkInformationService', ['$rootScope', '$log', 'cordovaNetworkInformationConstants', function ($rootScope, $log, cordovaNetworkInformationConstants) {
    return {
        /**
         * Return the current API version.
         */
        apiVersion: function () {
            $log.debug('cordovaNetworkInformationService.apiVersion.');
            return cordovaNetworkInformationConstants.apiVersion;
        },

        /**
         * Return the cordova API version.
         */
        cordovaVersion: function () {
            $log.debug('cordovaNetworkInformationService.cordovaVersion.');
            return cordovaNetworkInformationConstants.cordovaVersion;
        },

        /**
         * Check the NetworkInformation plugin availability.
         * @returns {boolean}
         */
        checkNetworkInformationAvailability: function () {
            $log.debug('cordovaNetworkInformationService.checkNetworkInformationAvailability.');
            if (!navigator.connection) {
                $log.warn('NetworkInformation API is not available.');
                return false;
            }
            return true;
        },

        /**
         * Get the current connection status.
         * For more information: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md#connectiontype
         */
        getConnectionType: function () {
            $log.debug('cordovaNetworkInformationService.getConnectionType.');

            // Checking API availability
            if (!this.checkNetworkInformationAvailability()) {
                return null;
            }

            // API call
            return navigator.connection.type;
        },

        /**
         * Register a callback that will be invoked when the network goes in the given status (see connectionStatusEvent in cordovaNetworkInformationConstants).
         * For more information: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md#network-related-events
         */
        addConnectionStatusChangedListener: function (status, callback) {
            $log.debug('cordovaNetworkInformationService.addConnectionStatusChangedListener.');

            // Checking API availability
            if (!this.checkNetworkInformationAvailability()) {
                return;
            }

            // API call
            document.addEventListener(
                status,
                function () {
                    $rootScope.$apply(callback);
                },
                false
            );
        }
    };
}]);


