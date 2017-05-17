const { strictEqual } = require('assert');

const { surround } = require('../.');

describe('#surround', () => {
    it('should surround a string with given sub string', () => strictEqual(surround('dog', '***'), '***dog***'));
});
