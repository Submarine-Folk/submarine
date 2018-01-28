
'use strict';

import { game } from './game';
import { sub, cursors, weapon, fireButton, treasure, sonarPing, sonarSend, mine, mineGroup, treasureGroup, mineWarning, destroySub, treasureFound, destroyTreasure, circle } from './create'

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
        // destroySub();
        //TODO: EXPLOSION ANIMATION
        mineWarning.play();
    });

    game.physics.arcade.overlap(sub, treasureGroup, function(a,b) {
        treasureFound.play();
        destroyTreasure(a,b);
        //TODO: score updates. new treasure appears
    });

};

export { update }; 
