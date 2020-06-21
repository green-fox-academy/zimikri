'use strict';

const section = document.getElementsByTagName('section')[0];

generateDivs(section);

//   3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored
const options = {
    divs: section.querySelectorAll('div'), 
    counter: 0,
};
const interval = setInterval(primeValidatior, 100, options);

//   1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent
function generateDivs(wrapper) {
    for (let index = 2; index <= 100; index++) {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(index);
        newDiv.appendChild(newContent);
        wrapper.appendChild(newDiv);
    }
}

//   2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
function primeValidatior(options) {
    const div = options.divs[options.counter];
    const divNumber = div.innerHTML;
    let classValue = divNumber > 1 ? 'prime' : 'not-prime';

    for (let index = 2; index < (divNumber / index); index++) {
        if (divNumber % index == 0) {
            classValue = 'not-prime';
            break;
        }
    }

    div.className = classValue;
    options.counter += 1;

    if (options.counter == options.divs.lenght) clearInterval(interval);
}
