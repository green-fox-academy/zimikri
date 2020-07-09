'use strict';

let timeout;

window.onload = () => {
    const inputs = [...document.getElementsByTagName('input')];
    
    inputs.forEach(input => {
        const event = (input.dataset.type == 'text') ? 'input' : 'change';
        input.addEventListener(event, () => {
            if (event == 'input') {
                if (timeout !== undefined) clearTimeout(timeout);
                timeout = setTimeout(reloadList, 500, inputs);
            } else {
                reloadList(inputs);
            }
        });
    });
};

function reloadList(inputs) {
    const xhr = new XMLHttpRequest();
    const query = [];
    let url = 'http://localhost:3000/books/view/ajax';

    inputs.forEach(input => {
        if (input.value) query.push(`${input.name}=${encodeURI(input.value)}`);
    });
    if (query.length) url += `?${query.join('&')}`;

    xhr.onload = () => {
        document.getElementById('booklist').innerHTML = xhr.response;
    };

    xhr.open('get',url);
    xhr.send();
}