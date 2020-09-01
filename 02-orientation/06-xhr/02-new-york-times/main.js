'use strict';

const API_KEY = '8747UQkkdOlM3lWSjTqAx7SDUPxQiGJE';
const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon&api-key=${API_KEY}&fl=headline,snippet,pub_date,web_url`;

const getArticles = () => {
    return fetch(url)
        .then(url => url.json())
        .then(data => data.response.docs)
        .then(docs => docs.map(art => {
            return {
                web_url: art.web_url,
                headline: art.headline.main,
                snippet: art.snippet,
                pub_date: art.pub_date.split('T')[0],
            };
        }));
}

const renderArticles = (articles) => {
    const main = document.getElementById('articles-wrapper');

    articles.forEach(article => {
        const articleWrapper = document.createElement('article');
        articleWrapper.innerHTML = `
            <a href="${article.web_url}">
                <h2>${article.headline}</h2>
            </a>
            <date class="pub-date">${article.pub_date}</date>
            <div class="snippet">${article.snippet}</div>
        `;

        main.appendChild(articleWrapper);        
    });
}

window.onload = getArticles()
    .then(articles => renderArticles(articles))
    .catch(err => console.error(err));