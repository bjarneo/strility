const isString = require('./is-string');

module.exports = function chars(input) {
    if (!isString(input)) {
        throw new TypeError('Input is not a string!');
    }

    return input.split('');
};
