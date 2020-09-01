'use strict';

const API_KEY = '8747UQkkdOlM3lWSjTqAx7SDUPxQiGJE';
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon&api-key=${API_KEY}&fl=headline,snippet,pub_date`

const getArticles = () => {
    return fetch(url)
        .then(url => url.json())
        .then(data => data.docs)
        .then(docs => docs.map(art => {
            return {
                web_url: art.web_url,
                headline: art.headline,
                snippet: art.snippet.main,
                pub_date: art.pub_date,
            };
        }))
        .catch(err => console.error(err));
}

window.onload = getArticles();