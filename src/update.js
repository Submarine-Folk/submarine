
'use strict';

import { game } from './game';
import { sub, cursors, weapon, fireButton, treasure, sonarPing, 
    sonarSend, mineWarning, treasureFound, destroyTreasure, circle,
    floor_walls, left_walls, right_walls, branches, algaes, weeds } from './create'

var deltaTime=0; 

function update() {

    //keeps game speed consistent for slower or faster computers
    deltaTime = game.time.elapsed/1000; 

    if (cursors.up.isDown){
        sub.body.velocity.y = -150;
        circle.body.velocity.y = -150;
    } else if (cursors.down.isDown){
        sub.body.velocity.y = 150;
        circle.body.velocity.y = 150;
    } else if (cursors.left.isDown) {
        sub.loadTexture('sub-flip', 0);
        sub.body.velocity.x = -150;
        circle.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        sub.loadTexture('sub', 0);
        sub.body.velocity.x = 150;
        circle.body.velocity.x = 150;
    }

    if (cursors.clockwise.isDown){
        weapon.fireAngle += 1;
        circle.angle += 1;
    } else if (cursors.couterClockwise.isDown){
        weapon.fireAngle -= 1;
        circle.angle -= 1;
    }

    game.physics.arcade.collide(sub, floor_walls);
    game.physics.arcade.collide(sub, left_walls);
    game.physics.arcade.collide(sub, right_walls);
    game.physics.arcade.collide(sub, algaes);
    game.physics.arcade.collide(sub, branches);
    game.physics.arcade.collide(sub, weeds);

    game.world.wrap(sub, 16);

    //collisions and overlaps
    game.physics.arcade.overlap(weapon.bullets, treasure, function() {
        weapon.killAll();
        sonarPing.play();
    });

    game.physics.arcade.overlap(sub, treasure, function() {
        treasureFound.play();
        destroyTreasure();
        //TODO: score updates. new treasure appears
    });

};

export { update }; 
