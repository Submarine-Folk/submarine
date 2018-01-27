'use strict';

import { game } from './game';

let platforms;
let sprite;
let weapon;
let cursors;
let fireButton;
let treasure;
let sonarPing;

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0, 'Sky')

    sonarPing = game.add.audio('sonar-ping');
    
    treasure = game.add.sprite(600, 300, 'treasure');
    game.physics.arcade.enable(treasure);
    treasure.enableBody = true;
    treasure.physicsBodyType = Phaser.Physics.ARCADE;
    
    weapon = game.add.weapon(1, 'torpedo');
    weapon.physicsBodyType = Phaser.Physics.ARCADE;
    weapon.enableBody = true;
    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    weapon.bulletSpeed = 300;
    weapon.bulletLifespan = 600;
    weapon.fireAngle = 0;
    weapon.autofire = 3000;
    weapon.fireRate = 1500;
    
    sprite = this.add.sprite(400, 300, 'sub');
    game.physics.arcade.enable(sprite);
    sprite.anchor.set(0.5);
    sprite.body.collideWorldBounds = true;
    sprite.body.drag.set(70);
    sprite.body.maxVelocity.set(100);

    //  Tell the Weapon to track the 'player' Sprite
    //  The 'false' argument tells the weapon not track sprite rotation
    weapon.trackSprite(sprite, 0, 0, false);

    
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

export { create, sprite, cursors, weapon, fireButton, treasure, sonarPing }; 
