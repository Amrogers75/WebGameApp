
(function(){

    angular.module('myApp')
        .component('home', { // the tag for using this is <char-detail>
            templateUrl: "Templates/home.template.html",
            controller: homeController,
            controllerAs: 'vm'

        });

        function homeController() {
            var vm = this;
            vm.dataArray = [
                {
                    src: 'https://pbs.twimg.com/media/B5YSU-yCcAEW36J.jpg'
                },
                {
                    src: 'http://www.gameguyz.com/sites/default/files/images/20130705071541.jpg'
                },
                {
                    src: 'http://i310.photobucket.com/albums/kk423/pokonyang_album/LOTR/Hobbits_RotK.jpg'
                },
                {
                    src: 'http://www.twitrcovers.com/wp-content/uploads/2012/12/StarCraft-II-l.jpg'
                },
                {
                    src: 'http://2.bp.blogspot.com/-6RXNdxLjo1I/TfNtwaYjlTI/AAAAAAAAAD8/yQeH_QvU9gw/s748/wallpaper_star_wars_the_force_unleashed_08_1920x1080.jpg'
                },
                {
                    src: 'http://livedoor.blogimg.jp/kinisoku/imgs/a/2/a260c55b.jpg'
                },
                {
                    src: 'http://www.kimcambodiadriver.com/uploads/images/tours/kim-cambodia-driver-angkor-wat.jpg'
                },
                {
                    src: 'http://dogasu.bulbagarden.net/comparisons/kanto/ep012_paint/matoie.jpg'
                }
            ];
        }
})();
