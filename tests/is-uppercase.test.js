'use strict';

const { strictEqual } = require('assert');

const { isUpperCase } = require('../.');

describe('#isUpperCase', () => {
    it('should be an upper cased string', () =>
        strictEqual(isUpperCase('I AM UPPER CASE'), true));

    it('should fail if a part of the string is lower case', () =>
        strictEqual(isUpperCase('I AM not UPPERCASE'), false));

    it('should fail if a part of the string is a number', () =>
        strictEqual(isUpperCase('I CONTAIN A 1337 NUMBER'), false));
});
