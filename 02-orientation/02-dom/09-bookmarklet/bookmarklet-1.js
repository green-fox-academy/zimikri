'use strict';

const newH1 = 'Green Fox Academy Conquers the World';

function changeH1(changeTo = newH1) {
    const allH1 = [...document.getElementsByTagName('h1')];

    allH1.forEach((h1Element) => {
        h1Element.innerText = changeTo;
    });
}