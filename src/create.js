'use strict';

import { game } from './game';

let platforms,
    sub,
    weapon,
    cursors,
    fireButton,
    treasure,
    treasureFound,
    mineWarning,
    sonarPing,
    destroyTreasure,
    sonarSend;

function create() {

    //background-image
    game.add.sprite(0,0, 'Sky')

    //add game sounds
    sonarPing = this.add.audio('sonar-ping');
    sonarSend = this.add.audio('sonar-send');
    treasureFound = this.add.audio('treasure-found');
    mineWarning = this.add.audio('mine-warning');

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
    treasure = game.add.sprite(600, 300, 'treasure');
    game.physics.arcade.enable(treasure);
    treasure.enableBody = true;
    treasure.physicsBodyType = Phaser.Physics.ARCADE;

    destroyTreasure = () => {
        treasure.destroy();
    }
    
    //weapon aka sonar
    let fire = (weapon, bullet) => {
        sonarSend.play();
    }

    weapon = game.add.weapon(1, 'torpedo');
    weapon.physicsBodyType = Phaser.Physics.ARCADE;
    weapon.enableBody = true;
    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN; //bullet disappears when it reaches lifespan distance
    weapon.bulletSpeed = 300;
    weapon.bulletLifespan = 600;
    weapon.fireAngle = 0;
    weapon.autofire = 3000;
    weapon.fireRate = 1500;
    weapon.onFire.add(fire); //plays sound on every fire event
    weapon.trackSprite(sub, 0, 0, false); //attaches weapon to sub

    //user input key
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
}

export { create, sub, cursors, weapon, fireButton, treasure, sonarPing, sonarSend, mineWarning, treasureFound, destroyTreasure }; 
