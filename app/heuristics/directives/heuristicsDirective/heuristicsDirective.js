(function () {

    angular
        .module('qualityAssister.heuristics')
        .directive('qaHeuristics', qaHeuristics);


    function qaHeuristics() {
        return {
            templateUrl: '/app/heuristics/directives/heuristicsDirective/heuristicsDirective.html',
            scope: {},
            controller: Controller
        };

        function Controller() {

        }
    }
})();