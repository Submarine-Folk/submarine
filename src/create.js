'use strict';

import { game } from './game';

let platforms,
    sub,
    weapon,
    cursors,
    fireButton,
    treasure,
    sonarPing,
    sonarSend;

function create() {
    sonarPing = this.add.audio('sonar-ping');
    sonarSend = this.add.audio('sonar-send');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    
    game.add.sprite(0,0, 'Sky')
    treasure = game.add.sprite(600, 300, 'treasure');
    game.physics.arcade.enable(treasure);
    treasure.enableBody = true;
    
    weapon = game.add.weapon(1, 'torpedo');
    weapon.physicsBodyType = Phaser.Physics.ARCADE;
    treasure.physicsBodyType = Phaser.Physics.ARCADE;
    weapon.enableBody = true;
    
    //  The bullet will be automatically killed when it reaches bulletLifespan
    weapon.bulletKillType = Phaser.Weapon.KILL_LIFESPAN;
    
    //  The speed at which the bullet is fired
    weapon.bulletSpeed = 300;
    weapon.bulletLifespan = 600;
    weapon.fireAngle = 0;
    weapon.autofire = 3000;
    weapon.fireRate = 1500;

    let fire = (weapon, bullet) => {
        sonarSend.play();
    }
    weapon.onFire.add(fire);
    
    // weapon.body.onCollide.add(hitSprite, this);
    // treasure.body.onCollide = new Phaser.Signal();

    sub = this.add.sprite(400, 300, 'sub');
    game.physics.arcade.enable(sub);

    sub.anchor.set(0.5);

    sub.body.collideWorldBounds = true;
    sub.body.drag.set(70);
    sub.body.maxVelocity.set(100);

    //  Tell the Weapon to track the 'player' Sprite
    //  With no offsets from the position
    //  The 'false' argument tells the weapon not track sprite rotation
    //  this allows the user to roate the bullet
    weapon.trackSprite(sub, 0, 0, false);

    
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

export { create, sub, cursors, weapon, fireButton, treasure, sonarPing, sonarSend }; 
