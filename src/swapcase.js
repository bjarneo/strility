const isString = require('./is-string');

module.exports = function swapCase(input) {
    if (!isString(input)) {
        throw new TypeError('Input is not a string!');
    }

    let i = 0;
    let str = [];

    while (i < input.length) {
        const char = input[i];

        i++;

        if (char === char.toLowerCase()) {
            str.push(char.toUpperCase());
        }

        if (char === char.toUpperCase()) {
            str.push(char.toLowerCase());
        }
    }

    return str.join('');
};
