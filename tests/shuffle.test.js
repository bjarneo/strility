'use strict';

const { strictEqual } = require('assert');

const { shuffle } = require('../.');

const str = 'The quick brown fox jumps over the lazy dog';

describe('#shuffle', () => {
    it('should shuffle a string', () =>
        strictEqual(shuffle(str) !== str, true));
});
