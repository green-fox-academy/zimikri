'use strict';

let chessLine: string[] = '% % % % '.split('');

for (let index = 0; index < chessLine.length; index++) {
    console.log(chessLine.join(''));
    chessLine.unshift(chessLine.pop());
}