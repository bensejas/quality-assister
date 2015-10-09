(function() {
    'use strict';

    angular
        .module('qualityAssister.core')
        .provider('$views', provider);


    function provider() {
        var $views = this;

        $views.dashboardComponent = {
            controller: 'DashboardComponentCtrl as ctrl',
            templateUrl: '/app/dashboard/components/dashboardComponent.html'
        };

        $views.$get = function () {
            return $views;
        };
    }
})();