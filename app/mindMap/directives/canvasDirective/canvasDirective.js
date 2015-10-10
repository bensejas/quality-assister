(function () {

    angular
        .module('qualityAssister.mindMap')
        .directive('qaCanvas', qaCanvas);


    function qaCanvas() {
        return {
            templateUrl: '/app/mindMap/directives/canvasDirective/canvasDirective.html',
            scope: {},
            controller: Controller,
            controllerAs: 'ctrl'
        };

        function Controller() {
            var ctrl = this;

            ctrl.rootItem = {
                text: 'Root Item',
                label: 'Label goes here',
                level: 1
            };
        }
    }
})();