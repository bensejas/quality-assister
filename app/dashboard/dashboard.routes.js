(function() {
    'use strict';

    angular
        .module('qualityAssister.dashboard')
        .config(routes);


    function routes($stateProvider, $viewsProvider) {
        $stateProvider
            .state('dashboard', {
                url: '',
                reloadOnSearch: false,
                views: {
                    body: $viewsProvider.dashboardComponent
                }
            });
    }
})();
