'use strict';

import { game } from './game';
import { sprite, cursors, weapon, fireButton } from './create'

var deltaTime=0; 

function update() {

    //keeps game speed consistent
    deltaTime = game.time.elapsed/1000; 

    if (cursors.up.isDown)
    {
        sprite.body.velocity.y = -150;
    }
    else
    {
        sprite.body.acceleration.set(0);
    }

    if (cursors.left.isDown)
    {
        sprite.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
        sprite.body.velocity.x = 150;
    }
    else if (cursors.down.isDown)
    {
        sprite.body.velocity.y = 150;
    }

    if (fireButton.isDown)
    {
        weapon.fire();
    }

    game.world.wrap(sprite, 16);

};

export { update }; 