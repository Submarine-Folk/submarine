'use strict';

import 'pixi';
import 'p2';
import 'phaser';
import { preload } from './preload';
import { update } from './update';
import { create } from './create';

const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });



