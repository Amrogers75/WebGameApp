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
                "diffuclty": "1",
                "icon": "https://a.dilcdn.com/bl/wp-content/uploads/sites/13/2015/01/icon-nemo.png"
            },
      {
                "name": "Aragorn",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://66.media.tumblr.com/avatar_b28b89b7e15d_128.png"
            },
      {
                "name": "Harry Potter",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://a.wattpad.com/useravatar/HxrryPxttxrGxrl.128.129214.jpg"
            },
      {
                "name": "Sharky Nemo",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://a15.t26.net/avatares/2/3/1/0/120x120_nr_23102687.jpg?458290"
            },
      {
                "name": "Little Jimmy Raynor",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "data:image/jpeg;base64,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"
            },
      {
                "name": "Dora",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://66.media.tumblr.com/avatar_59e708da7e84_128.png"
            },
      {
                "name": "Homer Simpson",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://pbs.twimg.com/profile_images/690947936537153536/InAIb-GE_reasonably_small.jpg"
            },
      {
                "name": "Mario",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://cdn2.scratch.mit.edu/get_image/gallery/2094822_200x130.png?v=1464715501.04"
            },
      {
                "name": "Yoshi",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "data:image/jpeg;base64,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"
            },
      {
                "name": "Pikachu",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://images2.memedroid.com/avatars/AVATAR12/55c34737e3ac5_thumb_s.jpeg"
            },
      {
                "name": "Ryu",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://www.imgfans.com.br/i777/Yann%20Carvalho/Minhas_Imagens/th_ryu2.gif"
            },
      {
                "name": "Inigo Montoya",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://a07.t26.net/taringa/avatares/3/5/B/C/2/E/Inigo_Montoya/120x120_A95.jpg"
            },
      {
                "name": "Batman",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://lh3.googleusercontent.com/-1mg9Wps67ms/VzagzZumoPI/AAAAAAAAD6g/hNW-ZhAGGg0BdIYmpMP_T4PjVsLGke_LA/w126-h126-p/images-40.jpeg"
            },
      {
                "name": "Joker",
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://i0.wp.com/fc03.deviantart.net/fs70/i/2013/049/4/f/the_joker__work_in_progress__by_rorysart-d5vd2dr.jpg?w=145&h=145"
            },
      {
                "name": "Nacho Libre",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://static.fmanager.com.br/uploads/monthly_2016_08/NachoLibreJackBlackPt.jpg.53cd4553a0e7244ad26bd864653ede29.thumb.jpg.b74ea465cf5a379688cc5f2026e09939.jpg"
            },
      {
                "name": "Macho Man",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://assets.change.org/photos/0/ng/fg/wynGFgZCDgcZvfU-128x128-noPad.jpg?1437796958"
            },
      {
                "name": "Hulk",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://gsimages-a.akamaihd.net/hulkvs/medium_icon.jpg"
            },
      {
                "name": "Stewie",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://t09.deviantart.net/INaUb8Z3gBMoKBo2wPqQZTwklPk=/fit-in/150x150/filters:no_upscale():origin()/pre04/b1c6/th/pre/i/2006/306/8/6/stewie_by_m1llah.jpg"
            },
      {
                "name": "Chilly Willy",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://bbs-sk.ru/uploads/profile/photo-3576.jpg"
            },
      {
                "name": "Big Boss",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://m2-ch.ru/fag/big/thumb/2678096/14722490298571s.jpg"
            },
      {
                "name": "bruce Lee",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://i259.photobucket.com/albums/hh310/hayward45/th_Bruce-Lee-1.jpg"
            },
      {
                "name": "Bowser",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "http://i987.photobucket.com/albums/ae356/gameartx/Mario%20Party%20Advance/Avatar/125x125/Mario-Party-Advance-Bowser_zpse0c577a9.png"
            },
      {
                "name": "Uther",
                "height": 111,
                "mass": 77,
                "diffuclty": "GLHF",
                "icon": "https://hydra-media.cursecdn.com/heroesofthestorm-es.gamepedia.com/thumb/a/a2/UtherArt.jpg/120px-UtherArt.jpg?version=eb2415fa600e727cf70d0fcffdc13e16"
            }

            //\
        ];

        // init();
    }

})();
