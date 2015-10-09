(function () {

    angular
        .module('qualityAssister.mindMap')
        .directive('qaMindMap', qaMindMap);


    function qaMindMap() {
        return {
            templateUrl: '/app/mindMap/directives/mindMapDirective/mindMapDirective.html',
            scope: {},
            controller: Controller
        };

        function Controller() {

        }
    }
})();