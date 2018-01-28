
'use strict';

import { game } from './game';
import { sub, cursors, weapon, fireButton, treasure, sonarPing, sonarSend, mineWarning, treasureFound, destroyTreasure } from './create'

var deltaTime=0; 

function update() {

    //keeps game speed consistent for slower or faster computers
    deltaTime = game.time.elapsed/1000; 

    //user input
    if (cursors.up.isDown){
        sub.body.velocity.y = -150;
    } else if (cursors.down.isDown){
        sub.body.velocity.y = 150;
    } else if (cursors.left.isDown) {
        sub.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        sub.body.velocity.x = 150;
    }

    if (cursors.clockwise.isDown){
        weapon.fireAngle += 1;
    } else if (cursors.couterClockwise.isDown){
        weapon.fireAngle -= 1;
    }

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
