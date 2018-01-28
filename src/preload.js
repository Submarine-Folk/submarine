'use strict';

import { game } from './game';

function preload() {

    //image assets
    game.load.image('sub', 'assets/img/submarine green/green submarine/type b/sg-b1.png');
    game.load.image('sub-flip', 'assets/img/submarine green/green submarine/type b/sg-b1-flip.png');
    game.load.image('circle', 'assets/img/circle.png')
    game.load.image('caret-circle', 'assets/img/caret-circle.png')
    game.load.image('soundwave', 'assets/img/sound.png')
    game.load.image('Sky', 'assets/Sky.jpg');
    game.load.image('treasure', 'assets/diamond.png');
    game.load.image('torpedo', 'assets/img/submarine green/green torpedo type/torpedo normal green a 1.png');
    game.load.image('caret-circle', 'assets/img/caret-circle.png');
    game.load.image('mine', 'assets/img/mine-small.png');
    game.load.image('soundwave', 'assets/img/sound.png');
    game.load.image('background', 'assets/img/background.png');
    game.load.image('midground', 'assets/img/midground.png');
    game.load.image('explosion', 'assets/img/explosion/explosion-small.gif');
    game.load.image('algae', 'assets/algae.png');
    game.load.image('branch', 'assets/branch.png');
    game.load.image('weed', 'assets/weed.png');
    game.load.image('floor_wall', 'assets/floor_wall.png');
    game.load.image('left_wall', 'assets/left_wall.png');
    game.load.image('right_wall', 'assets/right_wall.png');

    //sound assets
    game.load.audio('sonar-ping', 'assets/sounds/sonar.wav');
    game.load.audio('sonar-send', 'assets/sounds/wubwub.mp3');
    game.load.audio('mine-warning', 'assets/sounds/mine-warning.mp3');
    game.load.audio('treasure-found', 'assets/sounds/treasure.mp3');
    game.load.audio('water-music', 'assets/sounds/watery_cave.mp3');
    game.load.audio('explosion-sound', 'assets/sounds/explosion-sound.mp3')

    //game boundaries
    game.world.setBounds(0, 0, 1280, 780);
}

export { preload }; 
