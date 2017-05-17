'use strict';

const { deepStrictEqual } = require('assert');

const { chars } = require('../.');

const str = 'The quick brown fox jumps over the lazy dog';

describe('#chars', () => {
    it('should split a string into an array of characters', () =>
        deepStrictEqual(chars(str), str.split('')));
});
