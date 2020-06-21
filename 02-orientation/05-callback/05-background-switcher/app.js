'use strict';

// 1: Create a function that updates the <body> elements background-image's css property
// 2: The image value should be https://loremflickr.com/g/1280/800/hungary/
// 3: Make sure every time you refresh the image, you add a cachebuster
// WTF is a cachebuster?
// http://www.adopsinsider.com/ad-ops-basics/what-is-a-cache-buster-and-how-does-it-work/

// 4: Create a timer function that refreshes the background every 5 seconds

const preloadImg = document.getElementById('preloadImg');
const timerInterval = timer(updateBodyBg, 5000, preloadImg);

updateBodyBg(preloadImg);

function updateBodyBg(preloadImg) {
    const ord = Math.random() * 10000000000000000;

    document.body.style.backgroundImage = `url(${preloadImg.src})`;
    preloadImg.src = `https://loremflickr.com/g/1280/800/hungary/?ord=${ord}`;
}

function timer(func, interval, preloadImg) {
    return setInterval(func, interval, preloadImg);
}