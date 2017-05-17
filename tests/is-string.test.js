'use strict';

const { strictEqual } = require('assert');

const { isString } = require('../.');

describe('#isString', () => {
    it('should be a string', () =>
        strictEqual(isString('yes!!'), true));

    it('should not be a string', () =>
        strictEqual(isString(1337), false));
});
