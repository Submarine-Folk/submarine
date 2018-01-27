import { preload } from './preload';
import { update } from './update';
import { create } from './create';

var game = new Phaser.Game(1280, 720, Phaser.AUTO, '', { preload: preload, create: create, update: update });

export { game };