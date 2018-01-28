'use strict';

import { game } from './game';

function preload() {

    //image assets
    game.load.image('sub', 'assets/Pixel Submarine Pack/submarine green/green submarine/type b/sg-b1.png');
    game.load.image('Sky', 'assets/Sky.jpg');
    game.load.image('treasure', 'assets/diamond.png');
    game.load.image('torpedo', 'assets/Pixel Submarine Pack/submarine green/green torpedo type/torpedo normal green a 1.png');

    //sound assets
    game.load.audio('sonar-ping', 'assets/sounds/sonar.wav');
    game.load.audio('sonar-send', 'assets/sounds/wubwub.mp3');
    game.load.audio('mine-warning', 'assets/sounds/mine-warning.wav');
    game.load.audio('treasure-found', 'assets/sounds/treasure.mp3');
    game.load.audio('water-music', 'assets/sounds/watery_cave.mp3');

    //game boundaries
    game.world.setBounds(0, 0, 1280, 780);

}

export { preload }; 
