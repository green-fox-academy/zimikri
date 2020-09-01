'use strict';

const APIKEY = 'UldlAAxgoaUE6xzn6unbRmuFQjiJQSqM';
const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=funny&limit=16&rating=g&lang=en&offset=`

const getGiphy = () => {
    const offset = Math.floor(Math.random() * 1000);
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('get', url + offset, true);
    httpRequest.onload = () => {
        const responseData = JSON.parse(httpRequest.response).data;
        renderThumbs(responseData);
    };
    httpRequest.send(null);
}

const renderThumbs = (thumbs) => {
    const thumbsWrapper = document.getElementById('thumbsWrapper'); 
    thumbsWrapper.innerHTML = '';

    thumbs.forEach((thumb) => {
        const thumbUrl = thumb.images.fixed_width_small_still.url;
        const imgUrl = thumb.images.original.url;
        const img = document.createElement('img');
        img.src = thumbUrl;
        img.onclick = () => {
            document.getElementById('bigPicture').src = imgUrl;
        }
        thumbsWrapper.appendChild(img);
    });

    document.getElementById('bigPicture').src = thumbs[0].images.original.url;
}

window.onload = getGiphy;
