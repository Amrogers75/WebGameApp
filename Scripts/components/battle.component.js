
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

    function battleController($window, $scope) {
        $scope.greeting = 'Are you sure?<div ng-click="playerInfo()"  ui-sref="playerInfo">Yes</div><div>No</div>';
        $scope.doGreeting = function(greeting) {
            $window.alert(greeting);
        };
        
        //var vm = this;


    }
})();
