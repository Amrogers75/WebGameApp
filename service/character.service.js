(function () {

    angular.module('myApp')
        .service('characterService', characterService);

    function characterService() {
        var vm = this;
        vm.evilDwelers = evilDwelers;
        console.log(vm.evilDwelers);


        vm.evilDwelers = [
            {
                "name": "Nemo",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://a.dilcdn.com/bl/wp-content/uploads/sites/13/2015/01/icon-nemo.png"
            }
            // {
            //     "name": "Nemo",
            //     "height": 111,
            //     "mass": 77,
            //     "diffuclty": "19BBY",
            //     "icon": "https://a.dilcdn.com/bl/wp-content/uploads/sites/13/2015/01/icon-nemo.png"
            // },
            // {
            //     "name": "Nemo",
            //     "height": 111,
            //     "mass": 77,
            //     "diffuclty": "19BBY",
            //     "icon": "https://a.dilcdn.com/bl/wp-content/uploads/sites/13/2015/01/icon-nemo.png"
            // }, 
            // {
            //     "name": "Nemo",
            //     "height": 111,
            //     "mass": 77,
            //     "diffuclty": "19BBY",
            //     "icon": "https://a.dilcdn.com/bl/wp-content/uploads/sites/13/2015/01/icon-nemo.png"
            // }, 
            // {
            //     "name": "Nemo",
            //     "height": 111,
            //     "mass": 77,
            //     "diffuclty": "19BBY",
            //     "icon": "https://a.dilcdn.com/bl/wp-content/uploads/sites/13/2015/01/icon-nemo.png"
            // },
            // {
            //     "name": "Nemo",
            //     "height": 111,
            //     "mass": 77,
            //     "diffuclty": "19BBY",
            //     "icon": "https://a.dilcdn.com/bl/wp-content/uploads/sites/13/2015/01/icon-nemo.png"
            // }
        ];

        // init();
    }

})();
