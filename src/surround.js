const isString = require('./is-string');

module.exports = function surround(input, surround) {
    if (!isString(input) || !isString(surround)) {
        throw new TypeError('Input is not a string!');
    }

    return surround + input + surround;
};
