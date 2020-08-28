'use strict';

function NumberValidator() {

}

NumberValidator.isInt = (num) => {
    return NumberValidator
        .stringify(num)
        .match(/^-?[\d]+$/);
}

NumberValidator.stringify = (num) => {
    return (num + ' ').trim();
}

module.exports = NumberValidator;