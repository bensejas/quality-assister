(function () {

    angular
        .module('qualityAssister.mindMap')
        .directive('qaNode', qaNode);


    function qaNode() {
        return {
            templateUrl: '/app/mindMap/directives/nodeDirective/nodeDirective.html',
            scope: {
                item: '='
            },
            controller: Controller,
            controllerAs: 'ctrl',
            bindToController: true
        };

        function Controller() {
            var ctrl = this;


        }
    }
})();