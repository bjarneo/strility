const { strictEqual } = require('assert');

const { swapCase } = require('../.');

describe('#swapCase', () => {
    it('should swap case from lower to upper and upper to lower case', () => strictEqual(swapCase('IhaveupperCASEletters'), 'iHAVEUPPERcaseLETTERS'));
});
