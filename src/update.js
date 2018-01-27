
'use strict';

import { game } from './game';
import { sprite, cursors, weapon, fireButton, treasure, sonarPing, circle } from './create'

var deltaTime=0; 

function update() {

    //keeps game speed consistent
    deltaTime = game.time.elapsed/1000; 

    if (cursors.up.isDown){
        sprite.body.velocity.y = -150;
        circle.body.velocity.y = -150;
    } else if (cursors.down.isDown){
        sprite.body.velocity.y = 150;
        circle.body.velocity.y = 150;
    } else if (cursors.left.isDown) {
        sprite.loadTexture('sub-flip', 0);
        sprite.body.velocity.x = -150;
        circle.body.velocity.x = -150;
    } else if (cursors.right.isDown) {
        sprite.loadTexture('sub', 0);
        sprite.body.velocity.x = 150;
        circle.body.velocity.x = 150;
    }

    cursors.left.onDown.add(() => {
        circle.angle = 180;
        weapon.fireAngle = 180;
    })

    cursors.right.onDown.add(() => {
        circle.angle = 0;
        weapon.fireAngle = 0;
    })


    if (cursors.clockwise.isDown){
        weapon.fireAngle += 1;
        circle.angle += 1;
    } else if (cursors.couterClockwise.isDown){
        weapon.fireAngle -= 1;
        circle.angle -= 1;
    }

    game.world.wrap(sprite, 16);

    game.physics.arcade.overlap(weapon.bullets, treasure, function() {
        weapon.killAll();
        sonarPing.play();
    });
};

export { update }; 
