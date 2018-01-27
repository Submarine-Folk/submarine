'use strict';

import { game } from './game';

let platforms;
let sprite;
let weapon;
let cursors;
let fireButton;

function create() {

    game.add.sprite(0,0, 'Sky')
    

    weapon = game.add.weapon(1, 'torpedo');

    //  The bullet will be automatically killed when it reaches bulletLifespan
    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;

    //  The speed at which the bullet is fired
    weapon.bulletSpeed = 300;
    weapon.bulletLifespan = 600;
    
    //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
    weapon.fireRate = 50;
    


    sprite = this.add.sprite(400, 300, 'sub');
    game.physics.arcade.enable(sprite);

    sprite.anchor.set(0.5);

    sprite.body.collideWorldBounds = true;
    sprite.body.drag.set(70);
    sprite.body.maxVelocity.set(100);

    //  Tell the Weapon to track the 'player' Sprite
    //  With no offsets from the position
    //  But the 'true' argument tells the weapon to track sprite rotation
    weapon.trackSprite(sprite, 0, 0, true);

    cursors = this.input.keyboard.addKeys( 
        { 
            'up': Phaser.KeyCode.W, 
            'down': Phaser.KeyCode.S, 
            'left': Phaser.KeyCode.A, 
            'right': Phaser.KeyCode.D
        } );


    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);


}

export { create, sprite, cursors, weapon, fireButton }; 