'use strict';

const newImageUrl = 'http://bit.ly/lpgreenfox';

function changeImage(changeTo = newImageUrl) {
    const allImages = [...document.getElementsByTagName('img')];

    allImages.forEach((imgElement) => {
        imgElement.src = changeTo;
    });
}