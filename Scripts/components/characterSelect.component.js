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
        vm.evilBut = evilBut;
        
        vm.notLocked  = true;
        vm.isOpen = false;
        vm.selectedMode = 'md-fling';
        vm.selectedDirection = 'down';

        // expect(element(by.css('evilBut')).getAttribute('disabled')).toBeTruthy();


        function evilBut(){

        }

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
