# Callback

## Materials and Resources

| Material                                                                                                 |  Time |
| :------------------------------------------------------------------------------------------------------- | ----: |
| [Callback Functions Basics](https://www.youtube.com/watch?v=haz4SBcEYAw)                                 |  5:03 |
| [Understanding JavaScript Callbacks](https://www.youtube.com/watch?v=Nau-iEEgEoM)                        | 15:38 |
| [JavaScript Tutorial For Beginners #42 - JavaScript Timers](https://www.youtube.com/watch?v=Az5J_EkhYCY) | 12:11 |

## Material Review

- callback
- timers
  - `setTimeout`
  - `setInterval`
  - `clearTimeout`
  - `clearInterval`

## Workshop

```javascript
const useCallback = callback => {
  callback('Chewing out a rhythm on my bubble gum');
  callback('The sun is out and I want some');
  callback(
    'It\'s not hard, not far to reach, we can hitch a ride to Rockaway Beach'
  );
};

const printSentence = sentence => {
  console.log(sentence);
};

useCallback(printSentence);
```

### Exercises

- [callback-1](callback-1/callback-1.js)

```javascript
setTimeout(() => {
  console.log('apple'); // prints after one second
}, 1000);
console.log('pear'); // prints first
```

```javascript
const timeoutId = setTimeout(() => {
  console.log('Yeeey!'); // not going to run
}, 1000);

clearTimeout(timeoutId);
```

```javascript
const printing = () => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 1000);
  setTimeout(() => {
    console.log(3);
  }, 0);
  console.log(4);
};
printing();

// Output is 1, 4, 3, 2
```

- [Simple Timeout](simple-timeout/simple-timeout.js)
- [Multiple Timeout](multiple-timeout/multiple-timeout.js)
- [Prime squares](prime-squares/README.md)
- [Bomb defuse](bomb-defuse/README.md)
- [Background switcher](background-switcher/README.md)

## Individual Workshop Review

Please follow the styleguide:
[Our JavaScript styleguide](../../styleguide/javascript.md)

- Is the directory structure and the name of the files correct?
- Is every file in strict mode?
- Is the indentation good in each file?
- Is there unnecessary code?
- Can you find unnecessary code in comments?
- Is there unnecessary code duplication?
- Are there unnecessary empty blocks?
- Can you spot unused variables?
