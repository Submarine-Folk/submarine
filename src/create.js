'use strict';

import { game } from './game';

let platforms,
    sub,
    weapon,
    cursors,
    fireButton,
    treasure,
    treasureGroup,
    treasureFound,
    mineWarning,
    sonarPing,
    bgMusic,
    mine,
    destroySub,
    destroyTreasure,
    sonarSend,
    mineGroup,
    circle;

function create() {

    //background-image
    let background = game.add.tileSprite(0, 0, 810, 720, 'background');
    let midground = game.add.sprite(0, 0, 'midground');
    midground.height = game.height;
    midground.width = game.width;
    background.width = game.width;
    background.height = game.height;

    //add game sounds
    bgMusic = this.add.audio('water-music');
    sonarPing = this.add.audio('sonar-ping');
    sonarSend = this.add.audio('sonar-send');
    treasureFound = this.add.audio('treasure-found');
    mineWarning = this.add.audio('mine-warning');
      
    sonarPing.volume = .2;
  
    //music
    bgMusic.play();
    bgMusic.volume = .25;

    //game physics enable
    game.physics.startSystem(Phaser.Physics.ARCADE);


    mineGroup = game.add.group();

    for (var i = 0; i < 20; i++) {
        mine = mineGroup.create(100 * i, game.rnd.integerInRange(200, 500), 'mine');
        mine.enableBody = true;
        game.physics.arcade.enable(mine, Phaser.Physics.ARCADE);
        console.log(mine.body);
        mine.alpha = 0;
    }


    //mine
    // mine = game.add.sprite(800, 300, 'mine');

    //submarine
    sub = this.add.sprite(100, 100, 'sub');
    game.physics.arcade.enable(sub);
    sub.anchor.set(0.5);
    sub.body.collideWorldBounds = true;
    sub.body.drag.set(70);
    sub.body.maxVelocity.set(100);

    //explosion
    
    treasureGroup = game.add.group();

    for (var i = 0; i < 4; i++) {
        treasure = treasureGroup.create(200 * i, game.rnd.integerInRange(400, 650), 'treasure');
        treasure.enableBody = true;
        game.physics.arcade.enable(treasure, Phaser.Physics.ARCADE);
        treasure.alpha = 0;
    }


    //treasure
    // treasure = game.add.sprite(600, 300, 'treasure');
    // game.physics.arcade.enable(treasure);
    // treasure.enableBody = true;
    // treasure.physicsBodyType = Phaser.Physics.ARCADE;

    destroyTreasure = (a,b) => {
        console.log(treasureGroup,"A>>>B", a,b);
        treasureGroup.remove(b);
    }

    destroySub = () => {
        let xPositionSub = sub.world.x;
        let yPositionSub = sub.world.y;
        console.log(xPositionSub, yPositionSub);
        game.add.sprite(xPositionSub, yPositionSub, 'explosion');
        sub.destroy();
        circle.destroy();
        weapon.destroy();
    }
    
    //weapon (sonar)
    let fire = (weapon, bullet) => {
        sonarSend.play();
    }

    weapon = game.add.weapon(1, 'soundwave');
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

    circle = game.add.sprite(100, 100, 'caret-circle')
    game.physics.arcade.enable(circle);
    circle.anchor.set(0.5);
    circle.body.collideWorldBounds = true;
    circle.body.drag.set(70);
    circle.body.maxVelocity.set(100);

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

    console.log(cursors.clockwise)
}

export { create, sub, cursors, weapon, fireButton, treasure, sonarPing, mineGroup, sonarSend, treasureGroup, mineWarning, treasureFound, destroyTreasure, destroySub, circle }; 
