'use strict';

import { game } from './game';

function preload() {

    game.load.image('sub', 'assets/img/submarine green/green submarine/type b/sg-b1.png');
    game.load.image('sub-flip', 'assets/img/submarine green/green submarine/type b/sg-b1-flip.png');
    game.load.image('circle', 'assets/img/circle.png')
    game.load.image('caret-circle', 'assets/img/caret-circle.png')
    game.load.image('soundwave', 'assets/img/sound.png')
    game.load.image('Sky', 'assets/Sky.jpg');
    game.load.image('treasure', 'assets/diamond.png');
    game.load.image('torpedo', 'assets/img/submarine green/green torpedo type/torpedo normal green a 1.png');
    game.load.audio('sonar-ping', 'assets/sounds/SONAR.WAV');
    game.world.setBounds(0, 0, 1280, 720);

}

export { preload }; 
