import MagicSquare from './magic-square';

let magic = new MagicSquare();
magic.generate(Math.floor((Math.random() * 50) + 3));
magic.renderInConsole();
