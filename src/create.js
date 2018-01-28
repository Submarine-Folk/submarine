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
    circle,
    floor_walls, floor_wall,
    right_walls, right_wall,
    left_walls, left_wall,
    algaes, algae,
    branches, branch,
    weeds, weed,
    explosionSound,
    hooray,
    winRestart,
    scoreText;

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
    explosionSound = this.add.audio('explosion-sound');
    hooray = this.add.audio('hooray')
      
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

    for (var i = 0; i < 6; i++) {
        treasure = treasureGroup.create(200 * i, game.rnd.integerInRange(400, 650), 'treasure');
        treasure.enableBody = true;
        game.physics.arcade.enable(treasure, Phaser.Physics.ARCADE);
        treasure.alpha = 0;
    }

    destroyTreasure = (a,b) => {
        console.log(treasureGroup,"A>>>B", a,b);
        treasureGroup.remove(b);
    }

    winRestart = () => {
        hooray.play()
        setTimeout(game.state.start('default'), 5000);
    }

    destroySub = () => {
        explosionSound.play();
        setTimeout(game.state.start('default'), 2000);
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

    // let presses = []

    // cursors.left.onDown.add(() => {
    //     presses.push('left');

    //     if(presses[presses.length - 2] !== 'left'){
    //         weapon.fireAngle = 180;
    //     }
    // })

    // cursors.right.onDown.add(() => {
    //     presses.push('right');

    //     if(presses[presses.length - 2] !== 'right'  && presses.length !== 1){
    //         weapon.fireAngle = 0;
    //     }
    // })


    // Create 6 groups that will contain our objects
    floor_walls = game.add.group();
    right_walls = game.add.group();
    left_walls = game.add.group();
    algaes = game.add.group();
    branches = game.add.group();
    weeds = game.add.group();

    // Design the level

    const level = [
      '................................',
      '................................',
      'l..............................l',
      'l..............................l',
      'l..............................l',
      'l..ffffff...fffff...ff..ff.....r',
      'l....ff.....fffff...f.ff.f.....r',
      'l....ff.....f...f...f.ff.f.....r',
      'l..ffff.....f...f...f....f.....r',
      'l...a..b...w........a..b...w...r',
      'l...a..b...w........a..b...w...r',
      'l...a..b...w........a..b...w...r',
      'l...a..b............a..........r',
      'l...a..b...w...........b...w...r',
      'l...a..b...w........a..b...w...r',
      'l...a..b...w........a......w...r',
      'l......b...w...........b.......r',
      'l...a..b...w........a..b...w...r',
      'l...a..b...w........a......w...r',
      'l...a..b...w........a..b.......r',
      'l...a..b...w...........b.......r',
      'l...a..b...w........a..b...w...r',
      'l...a..b...w........a..b...w...r',
      'ffffffffffffffffffffffffffffffff'

    ];


    // Create the level by going through the array
    for (var i = 0; i < level.length; i++) {
        for (var j = 0; j < level[i].length; j++) {

            // Create a floor wall and add it to the floor_walls group
            if (level[i][j] == 'f') {
                floor_wall = game.add.sprite(40*j, 30*i, 'floor_wall');
                floor_wall.enableBody = true;
                game.physics.enable(floor_wall, Phaser.Physics.ARCADE);
                floor_wall.body.immovable = true; 
                floor_walls.add(floor_wall);
            }

            // Create left wall
            else if (level[i][j] == 'l') {
                left_wall = game.add.sprite(40*j, 30*i, 'left_wall');
                left_wall.enableBody = true;
                game.physics.enable(left_wall, Phaser.Physics.ARCADE);
                left_wall.body.immovable = true; 
                left_walls.add(left_wall);
            }

            // Create right wall
            else if (level[i][j] == 'r') {
                right_wall = game.add.sprite(40*j, 30*i, 'right_wall');
                right_wall.enableBody = true;
                game.physics.enable(right_wall, Phaser.Physics.ARCADE);
                right_wall.body.immovable = true; 
                right_walls.add(right_wall);
            }

            // Create algae and add it to the algaes group
            else if (level[i][j] == 'a') {
                algae = game.add.sprite(40*j, 30*i, 'algae');
                algae.enableBody = true;
                game.physics.enable(algae, Phaser.Physics.ARCADE);
                algae.body.immovable = false; 
                algaes.add(algae);
            }

            // Create a branch and add it to the branches group
            else if (level[i][j] == 'b') {
                branch = game.add.sprite(40*j, 30*i, 'branch');
                branch.enableBody = true;
                game.physics.enable(branch, Phaser.Physics.ARCADE);
                branch.body.immovable = false; 
                branches.add(branch);
            }

            // Create a weed and add it to the weeds group
            else if (level[i][j] == 'w') {
                weed = game.add.sprite(40*j, 30*i, 'weed');
                weed.enableBody = true;
                game.physics.enable(weed, Phaser.Physics.ARCADE);
                weed.body.immovable = false; 
                weeds.add(weed);
            }

        }
    }

    scoreText = game.add.text(500, 50, 'SCORE: 0', { font: '36px Arial', fill: '#ffffff' });
}

export { create, sub, cursors, weapon, fireButton, treasure, mineGroup, treasureGroup, sonarPing, sonarSend, destroySub, 
          mineWarning, treasureFound, destroyTreasure, circle, floor_walls, left_walls, right_walls,
          branches, algaes, weeds, explosionSound, scoreText, hooray, winRestart }; 
