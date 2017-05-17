const { deepStrictEqual } = require('assert');

const { between } = require('../.');

const pangram = 'The [quick] [brown] {{fox}} $jumps$ over the [lazy] {{dog}}';

describe('#between', () => {
    it('should find every occurance of a string wrapped in curly brackets', () => {
        const find = between('{{', '}}');

        deepStrictEqual(['fox', 'dog'], find(pangram));
    });
});
