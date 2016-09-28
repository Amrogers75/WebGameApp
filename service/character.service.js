(function () {

    angular.module('myApp')
        .service('characterService', characterService);

    function characterService() {
        var vm = this;
        vm.evilDwelers = evilDwelers;
        console.log(vm.evilDwelers);


        vm.evilDwelers = [
            //group 1
            {
                "name": "Nemo",
                //move one
                "moveOne": " Nemo uses Foreshortened Fin",
                "moveOneDmg": Math.floor(Math.random() * 9) +1,
                //move two
                "moveTwo": 'Nemo gets mad that you are makeing fun of him for his size',
                "moveTwoDmg":  Math.floor(Math.random() * 3) + 5,
                //move three
                "moveThree": 'Nemo and dory both come together and body slam you',
                "moveThreeDmg":  Math.floor(Math.random() * 5) +4,
                "diffuclty": "1",
                "icon": "https://a.dilcdn.com/bl/wp-content/uploads/sites/13/2015/01/icon-nemo.png"
            },
            {
                "name": "Harry Potter",
                //move one
                "moveOne": " Harry uses Bombarda Maxima he explodes the next to you the wall falls on you",
                "moveOneDmg": Math.floor(Math.random() * 5) + 6,
                //move two
                "moveTwo": 'Harry uses Expelliarmus and disarms you ',
                "moveTwoDmg":  Math.floor(Math.random() * 4) + 2,
                //move three
                "moveThree": 'Harry uses Stupefy and knocks you out ',
                "moveThreeDmg":  Math.floor(Math.random() * 6) + 5,
                "diffuclty": "2",
                "icon": "https://a.wattpad.com/useravatar/HxrryPxttxrGxrl.128.129214.jpg"
            },
            {
                "name": "Homer Simpson",
                "moveOne": " Homer eats the last bite of his doenut and gets mad that its gone and kicks you in the shins",
                "moveOneDmg": Math.floor(Math.random() * 5) +4,
                //move two
                "moveTwo": 'Homer gets mad at his kids and takes out his anger on you!!!',
                "moveTwoDmg":  Math.floor(Math.random() * 4) + 5,
                //move three
                "moveThree": 'bart is skateboarding and falls and his skate board hits you ',
                "moveThreeDmg":  Math.floor(Math.random() * 5) + 5,
                "diffuclty": "3",
                "icon": "https://pbs.twimg.com/profile_images/690947936537153536/InAIb-GE_reasonably_small.jpg"
            },

            {
                "name": "Mario",
                "moveOne": "Mario jumps on you head ",
                "moveOneDmg": Math.floor(Math.random() * 9) + 5,
                //move two
                "moveTwo": 'Mario finds a fire flower and the shoots you with a fireball',
                "moveTwoDmg":  Math.floor(Math.random() * 6) + 3,
                //move three
                "moveThree": 'Mario gravbs his F.U.D.D watter backpack and blasts you with it',
                "moveThreeDmg":  Math.floor(Math.random() * 5) + 4,
                "diffuclty": "4",
                "icon": "https://cdn2.scratch.mit.edu/get_image/gallery/2094822_200x130.png?v=1464715501.04"
            },


      {
                "name": "Aragorn",
              "moveOne": "Aragorn slashes at you with his sword ",
              "moveOneDmg": Math.floor(Math.random() * 5) + 5,
              //move two
              "moveTwo": 'Aragorn takes a shot at you with his bow',
              "moveTwoDmg":  Math.floor(Math.random() * 8) + 3,
              //move three
              "moveThree": 'Aragorn strikes you with a warriors blow',
              "moveThreeDmg":  Math.floor(Math.random() * 17) + 1 ,
                "diffuclty": "5",
                "icon": "http://66.media.tumblr.com/avatar_b28b89b7e15d_128.png"
            },
            {
                "name": "Bruce",
                "moveOne": "Bruce say im having fish tonight and charges and snags you leg for a sec before you get away ",
                "moveOneDmg": Math.floor(Math.random() * 5) + 5,
                //move two
                "moveTwo": 'Bruce trys to hug you and says fish are freinds, not food and squishis you to hard',
                "moveTwoDmg":  Math.floor(Math.random() * 7) +3,
                //move three
                "moveThree": 'Bruce smacks you with his tail fin',
                "moveThreeDmg":  Math.floor(Math.random() * 5) + 4,
                "diffuclty": "6",
                "icon": "https://a15.t26.net/avatares/2/3/1/0/120x120_nr_23102687.jpg?458290"
            },


      {
                "name": "Little Jimmy Raynor",
          "moveOne": "Jimmy and his group of raiders ambush you",
          "moveOneDmg": Math.floor(Math.random() * 14) + 4,
          //move two
          "moveTwo": 'jimmy is a little drunk on whisky and trys to shoot you',
          "moveTwoDmg":  Math.floor(Math.random() * 4) + 1,
          //move three
          "moveThree": 'Raynor uses his slight of hands and quickly draw his pistol and shoots',
          "moveThreeDmg":  Math.floor(Math.random() * 7) + 4,
                "diffuclty": "7",
                "icon": "data:image/jpeg;base64,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"
            },
      {
                "name": "Dora the Explorer",
          "moveOne": "Dora starts to try to teach you freindly helpfull lesson ",
          "moveOneDmg": Math.floor(Math.random() * 9) + 2,
          //move two
          "moveTwo": 'dora pulls something out of her backpack and smacks you with it ',
          "moveTwoDmg":  Math.floor(Math.random() * 11) +2,
          //move three
          "moveThree": 'dora say swiper no swiping and spots you sneaking',
          "moveThreeDmg":  Math.floor(Math.random() * 5) +5,
                "diffuclty": "8",
                "icon": "http://66.media.tumblr.com/avatar_59e708da7e84_128.png"
            },
            {
                "name": "Inigo Montoya",
                "moveOne": "My name is Inigo Montoya you killed my family now prepair to die! then thrust at you.",
                "moveOneDmg": Math.floor(Math.random() * 6) + 5,
                //move two
                "moveTwo": 'Inigo Montoya does a flip and dashes to the side and strikes',
                "moveTwoDmg":  Math.floor(Math.random() * 14) + 3,
                //move three
                "moveThree": 'Inigo Montoya had to much to drink and is trying to hit you but hes strikes are obvious',
                "moveThreeDmg":  Math.floor(Math.random() * 5) + 1,
                "diffuclty": "9",
                "icon": "https://a07.t26.net/taringa/avatares/3/5/B/C/2/E/Inigo_Montoya/120x120_A95.jpg"
            },


      {
                "name": "Yoshi",
          "moveOne": "Yoshi Streches out his tung and licks you up then poops you out in a egg shell",
          "moveOneDmg": Math.floor(Math.random() * 6) + 5,
          //move two
          "moveTwo": 'Yoshi start sprinting away from mario from past events and run you over ',
          "moveTwoDmg":  Math.floor(Math.random() * 6) +7,
          //move three
          "moveThree": 'yoshi picks up a big green polka dotted egg and throws it at you who knows whats inside',
          "moveThreeDmg":  Math.floor(Math.random() * 11) + 2,
                "diffuclty": "10",
                "icon": "data:image/jpeg;base64,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"
            },
            {
                "name": "Joker",
                "moveOne": "Joker wants to show you a magic trick",
                "moveOneDmg": Math.floor(Math.random() * 5) +5,
                //move two
                "moveTwo": 'Joker has 3 guns laid out he grabs one of them and shoots you BANG!',
                "moveTwoDmg":  Math.floor(Math.random() * 10) +1,
                //move three
                "moveThree": 'Joker try to feel you lungs with laughing gas',
                "moveThreeDmg": Math.floor(Math.random() * 4) +3,
                "diffuclty": "11",
                "icon": "http://i0.wp.com/fc03.deviantart.net/fs70/i/2013/049/4/f/the_joker__work_in_progress__by_rorysart-d5vd2dr.jpg?w=145&h=145"
            },
      {
          //change random function
                "name": "Pikachu",
          "moveOne": "Pikachu uses ThunderShock and shocks you",
          "moveOneDmg": Math.floor(Math.random() * 5) +5,
          //move two
          "moveTwo": 'Pikachu uses slam and jumps into you',
          "moveTwoDmg":  Math.floor(Math.random() * 3) +6,
          //move three
          "moveThree": 'Pikachu has his ketchup bottle and someone breaks it open and Pikachu thinks you did it and vigorously attacks you ',
          "moveThreeDmg":  Math.floor(Math.random() * 7) + 6,
                "diffuclty": "12",
                "icon": "http://images2.memedroid.com/avatars/AVATAR12/55c34737e3ac5_thumb_s.jpeg"
            },

            {
                "name": "Nacho Libre",
                "moveOne": "Nacho trys to make you a good meal but their is no CHIPS!",
                "moveOneDmg": Math.floor(Math.random() * 5) +1,
                //move two
                "moveTwo": 'Nacho clims to the highest spot he can see and jumps at you flying like a eagle ',
                "moveTwoDmg":  Math.floor(Math.random() * 5) +7,
                //move three
                "moveThree": 'you take Nachos mask off in battle and you quickly relize that was a mistake he then puts you in moves you have never seen before.',
                "moveThreeDmg":  Math.floor(Math.random() * 5) +10,
                "diffuclty": "13",
                "icon": "http://static.fmanager.com.br/uploads/monthly_2016_08/NachoLibreJackBlackPt.jpg.53cd4553a0e7244ad26bd864653ede29.thumb.jpg.b74ea465cf5a379688cc5f2026e09939.jpg"
            },
            {
                "name": "Stewie",
                "moveOne": "Stewie makes a device to kill you! ",
                "moveOneDmg": Math.floor(Math.random() * 7) +5,
                //move two
                "moveTwo": 'Stewie thinks his bear is cheating on him with you and he vigorusly smacks you with his baby hands',
                "moveTwoDmg":  Math.floor(Math.random() * 7) +2,
                //move three
                "moveThree": 'Stewie shoots you with his blaster',
                "moveThreeDmg":  Math.floor(Math.random() * 6) +5,
                "diffuclty": "14",
                "icon": "http://t09.deviantart.net/INaUb8Z3gBMoKBo2wPqQZTwklPk=/fit-in/150x150/filters:no_upscale():origin()/pre04/b1c6/th/pre/i/2006/306/8/6/stewie_by_m1llah.jpg"
            },
      {
                "name": "Batman",
          "moveOne": "Batman gravbs a random tool from his belt and throws it at you",
          "moveOneDmg": Math.floor(Math.random() * 12) +3,
          //move two
          "moveTwo": 'Batman jumps from the roof glides down with his cape and kicks you mid air',
          "moveTwoDmg":  Math.floor(Math.random() * 5) +5,
          //move three
          "moveThree": 'Batman plans out a sneak up on you and attack you ',
          "moveThreeDmg":  Math.floor(Math.random() * 7) +1,
                "diffuclty": "15",
                "icon": "https://lh3.googleusercontent.com/-1mg9Wps67ms/VzagzZumoPI/AAAAAAAAD6g/hNW-ZhAGGg0BdIYmpMP_T4PjVsLGke_LA/w126-h126-p/images-40.jpeg"
            },


      {
                "name": "Macho Man Randy Savage",
          "moveOne": "Macho puts on his sunglasses say Ohhhhh yeaHHH BROTHeRR The tower of power , too sweet to be sour, and body slams you ",
          "moveOneDmg":Math.floor(Math.random() * 5) +8,
          //move two
          "moveTwo": 'Macho say im a funky monkey.skys the limit and space is the place!. his fans scream his name and he puts you in a suplex till you beg for mercy.',
          "moveTwoDmg":  Math.floor(Math.random() * 4) +10,
          //move three
          "moveThree": 'Randy Savage spends his time trying to hype up the crowd and totally forgets he is in a battle.',
          "moveThreeDmg": Math.floor(Math.random() * 2) + 1,
                "diffuclty": "16",
                "icon": "https://assets.change.org/photos/0/ng/fg/wynGFgZCDgcZvfU-128x128-noPad.jpg?1437796958"
            },
      {
                "name": "Hulk",
          "moveOne": "Hulk get enrages and jumps at you causing the earth to shake",
          "moveOneDmg": Math.floor(Math.random() * 4) +7,
          //move two
          "moveTwo": 'Hulk spills coffey and is getting angry you try to calm him down',
          "moveTwoDmg":  Math.floor(Math.random() * 11) + 1,
          //move three
          "moveThree": 'Hulk is angry that you are attacking him so smacks you ',
          "moveThreeDmg":  Math.floor(Math.random() * 6) +5,
                "diffuclty": "17",
                "icon": "http://gsimages-a.akamaihd.net/hulkvs/medium_icon.jpg"
            },

      // {
      //           "name": "Chilly Willy",
      //     "moveOne": "",
      //     "moveOneDmg": Math.floor(Math.random() * 5) +7,
      //     //move two
      //     "moveTwo": '',
      //     "moveTwoDmg":  Math.floor(Math.random() * 5) +7,
      //     //move three
      //     "moveThree": '',
      //     "moveThreeDmg":  Math.floor(Math.random() * 5) +7,
      //           "diffuclty": "2",
      //           "icon": "http://bbs-sk.ru/uploads/profile/photo-3576.jpg"
      //       },
      {
                "name": "Big Boss",
          "moveOne": "Snake sneaks up on you and trys to choke you out",
          "moveOneDmg": Math.floor(Math.random() * 8) +4,
          //move two
          "moveTwo": 'Snake pulls out a random gun in his backpack and shoot it at you',
          "moveTwoDmg":  Math.floor(Math.random() * 16) +3,
          //move three
          "moveThree": 'snake is takeing a break and starts smokeing his cigar time flies by',
          "moveThreeDmg":  Math.floor(Math.random() * 2) +1,
                "diffuclty": "18",
                "icon": "http://m2-ch.ru/fag/big/thumb/2678096/14722490298571s.jpg"
            },
      {
                "name": "bruce Lee",
          "moveOne": "Bruce Lee hits you with a one inch punch",
          "moveOneDmg": Math.floor(Math.random() * 9) +4,
          //move two
          "moveTwo": 'Bruce Lee wips out his nunhuks spining them ablazing and then hits you with them',
          "moveTwoDmg":  Math.floor(Math.random() * 8) +7,
          //move three
          "moveThree": 'Bruce Lee taunts you to come at him you run at him and fall in to his trap',
          "moveThreeDmg":  Math.floor(Math.random() * 5) +7,
                "diffuclty": "19",
                "icon": "http://i259.photobucket.com/albums/hh310/hayward45/th_Bruce-Lee-1.jpg"
            },
      {
                "name": "Uther",
          "moveOne": "Uther say for the holy light then smacks you with his holy hammer",
          "moveOneDmg": Math.floor(Math.random() * 5) +7,
          //move two
          "moveTwo": 'Uther cast a holy beam of light apon you',
          "moveTwoDmg":  Math.floor(Math.random() * 9) +6,
          //move three
          "moveThree": 'Uther trys preaching the holy light to you',
          "moveThreeDmg":  Math.floor(Math.random() * 5) +1,
                "diffuclty": "20",
                "icon": "https://hydra-media.cursecdn.com/heroesofthestorm-es.gamepedia.com/thumb/a/a2/UtherArt.jpg/120px-UtherArt.jpg?version=eb2415fa600e727cf70d0fcffdc13e16"
            }

            //\
        ];

        // init();
    }

})();
