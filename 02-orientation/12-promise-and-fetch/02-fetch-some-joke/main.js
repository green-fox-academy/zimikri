'use strict';

const jokeUrl = 'http://api.icndb.com/jokes/random';

const errorOnRequest = (err) => {
    document.body.className = '';
    document.getElementById('joke').innerHTML = 'Unfortunately no jokes for today :(';
};

const displayJoke = () => {
    fetchJson(jokeUrl)
        .then(joke => {
            if (joke && joke.type == 'success') {
                document.body.className = 'has-joke';
                document.getElementById('joke').innerHTML = joke.value.joke;
            }
        });
}

const fetchJson = (url) => {
    return fetch(url)
                .then(response => {
                    if (!response.ok) {
                        console.log(response);
                        throw Error(response.statusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .catch(errorOnRequest);
}

window.onload = () => {
    displayJoke();
    document
        .getElementById('button')
        .addEventListener('click', displayJoke);
};