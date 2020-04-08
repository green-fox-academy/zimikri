import {Domino} from "./Domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
} 

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value.values);
    });
}

function orderDominoes(dominoes: Domino[]) {
    let tmpDominos: Domino[];
    let sortedDominos: Domino[];
    let counter: number;

    // We don't need this 'for' loop in this special case of dominoes, because we can start with any of them
    // the 'do-while' loop will order them.
    // We need this only if we change some numbers
    // Anyway if tmpDominos.length != 0 we have some dominoes not ordered
    for (let permutation = 0; permutation < dominoes.length; permutation++) {
        counter = dominoes.length - 1;
        tmpDominos = [...dominoes];
        sortedDominos = tmpDominos.splice(0, 1);

        do {
            tmpDominos.forEach((domino, index) => {
                if (sortedDominos[sortedDominos.length - 1].values[1] == domino.values[0]) {
                    sortedDominos.push(domino);
                    tmpDominos.splice(index, 1);
                }
            });
            counter--;
        } while (tmpDominos.length > 0 && counter > 0);

        if (tmpDominos.length == 0) break;

        dominoes.push(dominoes.shift());
    }    
    
    return sortedDominos;
}

let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

print(orderDominoes(dominoes));
