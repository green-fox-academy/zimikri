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

window.onload = getGiphy;
