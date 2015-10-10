(function () {

    angular
        .module('qualityAssister.heuristics')
        .directive('qaHeuristics', qaHeuristics);


    function qaHeuristics() {
        return {
            templateUrl: '/app/heuristics/directives/heuristicsDirective/heuristicsDirective.html',
            scope: {},
            controller: Controller,
            controllerAs: 'ctrl'
        };

        function Controller() {
            var ctrl = this;

            ctrl.showHeuristic = showHeuristic;
            ctrl.selectedHeuristic = {};
            ctrl.heuristics = [
                { name: 'Variable Analysis', description: 'What variables are used within the target component. Variables can be obvious, subtle or hidden.'},
                { name: 'Multiple Users', description: 'Think of scenarios where two users can be using the same component at the same time. Can their ' +
                'actions affect the other with them knowing?'},
                { name: 'State Analysis', description: 'What states can the target component be in. Are there an states transitions that should ' +
                'not be able to happen? An state diagram can assist you make links.'},
                { name: 'Personas', description: 'Put yourself in the shoes of a real user of the component. Undertake traits, behaviours and characteristics ' +
                'that a user could have.'},
                { name: 'Flow', description: 'What are some common scenarios that a user may take when using the component? Even try some error scenarios.'},
                { name: 'Boundary Analysis', description: 'What are the boundary values that will cause a change in behaviour. E.g. Savings < $10 shows warning.'},
            ];

            function showHeuristic(heuristic) {
                ctrl.selectedHeuristic = heuristic;
            }
        }
    }
})();