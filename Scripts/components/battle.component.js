
(function(){

    angular.module('myApp')
        .component('battle', { // the tag for using this is <char-detail>
            templateUrl: "Templates/battle.html",
            controller: battleController,
            controllerAs: 'vm'

        })
        .config(battleConfig);

    function battleConfig($stateProvider) {
        $stateProvider.state('battle', {
            url: '/battle',
            template: '<battle></battle>'
        });
    }

    function battleController() {
        var vm = this;
        

    }
})();
