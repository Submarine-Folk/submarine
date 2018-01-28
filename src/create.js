'use strict';

import { game } from './game';

<<<<<<< HEAD
let platforms,
    sub,
    weapon,
    cursors,
    fireButton,
    treasure,
    treasureFound,
    mineWarning,
    sonarPing,
    bgMusic,
    destroyTreasure,
    sonarSend,
    circle;

function create() {

    //background-image
    game.add.sprite(0,0, 'Sky')

    //add game sounds
    bgMusic = this.add.audio('water-music');
    sonarPing = this.add.audio('sonar-ping');
    sonarSend = this.add.audio('sonar-send');
    treasureFound = this.add.audio('treasure-found');
    mineWarning = this.add.audio('mine-warning');

    //music
    bgMusic.play();
    bgMusic.volume = .75;

    //game physics enable
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //submarine
    sub = this.add.sprite(400, 300, 'sub');
    game.physics.arcade.enable(sub);
    sub.anchor.set(0.5);
    sub.body.collideWorldBounds = true;
    sub.body.drag.set(70);
    sub.body.maxVelocity.set(100);

    //treasure
=======
let platforms;
let sprite;
let weapon;
let cursors;
let fireButton;
let treasure;
let sonarPing;
let circle;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0, 'Sky')

    sonarPing = game.add.audio('sonar-ping');
    
>>>>>>> a0098967007228efd156defe4d5d52ed5af325ce
    treasure = game.add.sprite(600, 300, 'treasure');
    game.physics.arcade.enable(treasure);
    treasure.enableBody = true;
    treasure.physicsBodyType = Phaser.Physics.ARCADE;
<<<<<<< HEAD

    destroyTreasure = () => {
        treasure.destroy();
    }
    
<<<<<<< HEAD
    //weapon (sonar)
    let fire = (weapon, bullet) => {
        sonarSend.play();
    }

    weapon = game.add.weapon(1, 'soundwave');
=======
    weapon = game.add.weapon(1, 'soundwave')
>>>>>>> changed sonar direction img
    weapon.physicsBodyType = Phaser.Physics.ARCADE;
    weapon.enableBody = true;
    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN; //bullet disappears when it reaches lifespan distance
=======
    
    weapon = game.add.weapon(1, 'soundwave')
    weapon.physicsBodyType = Phaser.Physics.ARCADE;
    weapon.enableBody = true;
    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
>>>>>>> a0098967007228efd156defe4d5d52ed5af325ce
    weapon.bulletSpeed = 300;
    weapon.bulletLifespan = 600;
    weapon.fireAngle = 0;
    weapon.autofire = 3000;
    weapon.fireRate = 1500;
<<<<<<< HEAD
    weapon.onFire.add(fire); //plays sound on every fire event
    weapon.trackSprite(sub, 0, 0, false); //attaches weapon to sub
=======
    
    sprite = game.add.sprite(400, 300, 'sub');
    game.physics.arcade.enable(sprite);
    sprite.anchor.set(0.5);
    sprite.body.collideWorldBounds = true;
    sprite.body.drag.set(70);
    sprite.body.maxVelocity.set(100);
>>>>>>> a0098967007228efd156defe4d5d52ed5af325ce

<<<<<<< HEAD
    // sub sonar pointer
=======
    //  Tell the Weapon to track the 'player' Sprite
    //  The 'false' argument tells the weapon not track sprite rotation
    weapon.trackSprite(sprite, 0, 0, false);

<<<<<<< HEAD
>>>>>>> changed sonar direction img
=======
>>>>>>> a0098967007228efd156defe4d5d52ed5af325ce
    circle = game.add.sprite(400, 300, 'caret-circle')
    game.physics.arcade.enable(circle);
    circle.anchor.set(0.5);
    circle.body.collideWorldBounds = true;
    circle.body.drag.set(70);
    circle.body.maxVelocity.set(100);
<<<<<<< HEAD
<<<<<<< HEAD

    //user input key    
=======
=======
>>>>>>> a0098967007228efd156defe4d5d52ed5af325ce
    
>>>>>>> changed sonar direction img
    cursors = this.input.keyboard.addKeys( 
        { 
            'up': Phaser.KeyCode.W, 
            'down': Phaser.KeyCode.S, 
            'left': Phaser.KeyCode.A, 
            'right': Phaser.KeyCode.D,
            'clockwise': Phaser.KeyCode.RIGHT,
            'couterClockwise': Phaser.KeyCode.LEFT
        }
    );

    console.log(cursors.clockwise)
}

<<<<<<< HEAD
export { create, sub, cursors, weapon, fireButton, treasure, sonarPing, sonarSend, mineWarning, treasureFound, destroyTreasure, circle }; 
=======
export { create, sprite, cursors, weapon, fireButton, treasure, sonarPing, circle }; 
>>>>>>> a0098967007228efd156defe4d5d52ed5af325ce
