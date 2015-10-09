(function() {
    'use strict';

    angular
        .module('qualityAssister.action')
        .directive('qaActionList', qaActionList);


    function qaActionList() {
        return {
            restrict: 'E',
            templateUrl: '/app/action/directives/actionListDirective/actionListDirective.html',
            scope: {
            },
            bindToController: true,
            controllerAs: 'ctrl',
            controller: Controller
        };

        function Controller() {
            var ctrl = this;


        }
    }
})();