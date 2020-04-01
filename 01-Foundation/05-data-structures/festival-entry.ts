'use strict';

const watchlist: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
 name: string,
 alcohol: number,
 guns: number
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

function securityCheck(queue: FestivalGoer[]) {
    // const entered
    for (let index = queue.length-1; index >= 0; index--) {
        if (queue[index].guns > 0) {
            watchlist.unshift(queue[index].name);
            queue.splice(index, 1);
        } else if (queue[index].alcohol > 0) {
            securityAlcoholLoot += queue[index].alcohol;
            queue[index].alcohol = 0;
        }
    }
    // queue.forEach((goer, index) => {
    //     if (goer.guns > 0) {
    //         watchlist.push(goer.name);
    //         queue.splice(index - watchlist.length, 1);
    //     } else if (goer.alcohol > 0) {
    //         securityAlcoholLoot += goer.alcohol;
    //         queue[index].alcohol = 0;
    //     }
    // });
    return queue;
}


console.log(securityCheck(queue));
console.log(watchlist);
console.log(securityAlcoholLoot);


export = securityCheck;