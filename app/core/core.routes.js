(function() {
    'use strict';

    angular
        .module('qualityAssister.core')
        .config(routes);


    function routes($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }
})();
