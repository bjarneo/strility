const isString = require('./is-string');

module.exports = function isUpperCase(input) {
    if (!isString(input)) {
        throw new TypeError('Input is not a string!');
    }

    let i = 0;

    while (i < input.length) {
        const char = input[i];

        i++;

        if (char === ' ') {
            continue;
        }

        if (!isNaN(char * 1)) {
            return false;
        }

        if (char !== char.toUpperCase()) {
            return false;
        }
    }

    return true;
};
