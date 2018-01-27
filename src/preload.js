'use strict';

import { game } from './game';

function preload() {

    game.load.image('sub', 'assets/Pixel Submarine Pack/submarine green/green submarine/type b/sg-b1.png');
    game.load.image('Sky', 'assets/Sky.jpg');
    game.load.image('treasure', 'assets/diamond.png');
    game.load.audio('sonar-ping', 'assets/sounds/SONAR.WAV');
    game.load.image('torpedo', 'assets/Pixel Submarine Pack/submarine green/green torpedo type/torpedo normal green a 1.png');
    game.world.setBounds(0, 0, 1280, 780);

}

export { preload }; 
