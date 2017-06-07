'use strict';

const { strictEqual } = require('assert');

const { replaceAll } = require('../.');

const pangram = 'The quick brown fox jumps over the lazy dog';

describe('#replaceAll', () => {
    it('should replace every occurence of given sub string', () =>
        strictEqual(
            replaceAll(
                pangram,
                ['quick', 'brown', 'fox', 'lazy', 'dog'],
                ['weird', 'red', 'leprechaun', 'snappy', 'turtle']
            ),
            'The weird red leprechaun jumps over the snappy turtle'
        )
    );

    it('should replace every occurence of a single sub string', () =>
        strictEqual(
            replaceAll(
                pangram,
                ['quick', 'brown', 'fox', 'lazy', 'dog'],
                ['leprechaun']
            ),
            'The leprechaun leprechaun leprechaun jumps over the leprechaun leprechaun'
        )
    );
});
