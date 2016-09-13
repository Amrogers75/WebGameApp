(function () {
    angular.module("myApp", ['ui.router', 'ngMaterial', 'jkAngularCarousel'])
        .config(function($stateProvider, $urlRouterProvider) {
            //
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/main");
            //
            // Now set up the states
            $stateProvider
                .state('main', {
                    url: "/main",
                    template: "<home-template></home-template>"
                })
        });
})();