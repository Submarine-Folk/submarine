
'use strict';

import { game } from './game';
import { sub, cursors, weapon, fireButton, treasure, sonarPing, sonarSend } from './create'

var deltaTime=0; 

function update() {

    //keeps game speed consistent
    deltaTime = game.time.elapsed/1000; 

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

    game.physics.arcade.overlap(weapon.bullets, treasure, function() {
        weapon.killAll();
        sonarPing.play();
    });

};

export { update }; 
