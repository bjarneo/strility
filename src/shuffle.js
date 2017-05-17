const { knuthShuffle } = require('knuth-shuffle');
const isString = require('./is-string');
const chars = require('./chars');

module.exports = function shuffle(input) {
    if (!isString(input)) {
        throw new TypeError('Input is not a string!');
    }

    return knuthShuffle(chars(input)).join('');
};
