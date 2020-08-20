# Promise and fetch

A promise represents the future result of an asynchronous operation. Fetch API
is the new `XMLHttpRequest`. It provides a more powerful and flexible feature
set.

## Materials & Resources

### Materials

| Material                                                                        |    Time |
| :------------------------------------------------------------------------------ | ------: |
| [Promises](https://www.youtube.com/watch?v=2d7s3spWAzo)                         |   16:55 |
| [Fetch](https://www.youtube.com/watch?v=tVQgfKqbX3M)                            |    5:26 |
| [Async await & fetch](https://www.youtube.com/watch?v=568g8hxJJp4)              |   23:59 |
| [Promise chaining with fetch example](https://javascript.info/promise-chaining) | reading |

### Optional readings

| Material                         |
| :------------------------------- |
| [Fetch API vs XMLHttpRequest][1] |
| [How to escape promise hell][2]  |
| [Promise in MDN][3]              |
| [Fetch API in MDN][4]            |
| [`fetch()` in MDN][5]            |

## Material Review

- promise
  - `.resolve()`
  - `.reject()`
  - `.then()`
  - `.catch()`
  - `.finally()`
  - chaining
- Fetch API
  - `fetch()`
- `await`

## Workshop

### Promise

#### Then

```javascript
const URL = 'https://api.kanye.rest';

const myAsyncAjax = url => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

myAsyncAjax(URL).then(response => {
  console.log(response);
});
```

#### Catch

```javascript
const erroredFunction = () => {
  return new Promise(() => {
    throw new Error('Uh-oh!');
  });
};

const promise = erroredFunction();
promise.catch(error => {
  console.log(error.message);
});
```

### Fetch

```javascript
const URL = 'http://api.icndb.com/jokes/random';

fetch(URL)
  .then(response => response.json())
  .then(myJson => console.log(myJson));
```

### Exercises

- [Promise, it won't hurt](promise-it-wont-hurt/README.md)
- [Fetch some joke](fetch-some-joke/README.md)

[1]: https://stackoverflow.com/questions/35549547/what-is-the-difference-between-the-fetch-api-and-xmlhttprequest
[2]: https://medium.com/@pyrolistical/how-to-get-out-of-promise-hell-8c20e0ab0513
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[5]: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
