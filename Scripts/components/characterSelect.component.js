(function(){

    angular.module('myApp')
        .component('characterSelect', { // the tag for using this is <char-detail>
            templateUrl: "Templates/characterSelect.html",
            controller: characterSelectController,
            controllerAs: 'vm'
        })
        .config(aboutConfig);


    function aboutConfig($stateProvider) {
        $stateProvider.state('characterSelect', {
            url: '/Character Select',
            template: '<character-select style="background-color:red;"></character-select>'
            
        });
    }

    function characterSelectController() {
        var vm = this;
        //variables
        // vm.evilDwelers = characterService.evilDwelers;
        // //fucntions
        // // vm.badGuys = badGuys;
        // console.log(evilDwelers);
        // //
        //
        // function badGuys() {
        //     vm.name = characterService.evilDwelers.name;
        //     icon = characterService.evilDwelers.icon;
        //     console.log(vm.name);
        // }
        
    }
})();
