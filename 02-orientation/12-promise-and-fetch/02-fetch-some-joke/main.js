'use strict';

const jokeUrl = 'http://api.icndb.com/jokes/random';

const displayJoke = () => {
    fetchJson(
        jokeUrl,
        renderJoke,
        renderJokeError
    );
}

const renderJoke = (joke) => {
    document.body.className = 'has-joke';
    document.getElementById('joke').innerHTML = joke.value.joke;
}

const renderJokeError = (err) => {
    document.body.className = '';
    document.getElementById('joke').innerHTML = 'Unfortunately no jokes for today :(';
    if (err) console.error(err.message);
};

const fetchJson = (url, onSuccess, onError) => {
    fetch(url)
        .then(response => response.json())
        .then(onSuccess)
        .catch(onError);
}

window.onload = () => {
    displayJoke();
    document
        .getElementById('button')
        .addEventListener('click', displayJoke);
};