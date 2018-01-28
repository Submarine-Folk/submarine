
'use strict';

import { game } from './game';
import { sub, cursors, weapon, fireButton, treasure, sonarPing, mine, mineGroup, treasureGroup,
    sonarSend, mineWarning, treasureFound, destroyTreasure, circle, destroySub,
    floor_walls, left_walls, right_walls, branches, algaes, weeds, explosionSound, scoreText } from './create'

var deltaTime=0; 
var score = 0;

function update() {

    //keeps game speed consistent for slower or faster computers
    deltaTime = game.time.elapsed/1000; 

    if (cursors.up.isDown){
        sub.body.velocity.y = -150;
    } else if (cursors.down.isDown){
        sub.body.velocity.y = 150;
    } else if (cursors.left.isDown) {
        sub.loadTexture('sub-flip', 0);
        sub.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        sub.loadTexture('sub', 0);
        sub.body.velocity.x = 150;
    }

    if (cursors.clockwise.isDown){
        weapon.fireAngle += 1;
    } else if (cursors.couterClockwise.isDown){
        weapon.fireAngle -= 1;
    }

    game.physics.arcade.collide(sub, floor_walls);
    game.physics.arcade.collide(sub, left_walls);
    game.physics.arcade.collide(sub, right_walls);
    game.physics.arcade.collide(sub, algaes);
    game.physics.arcade.collide(sub, branches);
    game.physics.arcade.collide(sub, weeds);

    game.world.wrap(sub, 16);

    //collisions and overlaps
    game.physics.arcade.overlap(weapon.bullets, treasureGroup, function() {
        weapon.killAll();
        sonarPing.play();
    });

    game.physics.arcade.overlap(weapon.bullets, mineGroup, function() {
        weapon.killAll();
        mineWarning.play();
    });

    game.physics.arcade.overlap(sub, mineGroup, function() {
        destroySub();
        //TODO: EXPLOSION ANIMATION
    });

    game.physics.arcade.overlap(sub, treasureGroup, function(a,b) {
        treasureFound.play();
        score+= 10;
        scoreText.setText('SCORE: '+score)
        destroyTreasure(a,b);
        //TODO: score updates. new treasure appears
    });

};

export { update }; 
