'use strict';

const { strictEqual } = require('assert');

const { isLowerCase } = require('../.');

describe('#isLowerCase', () => {
    it('should be an lower cased string', () =>
        strictEqual(isLowerCase('i am lower case'), true));

    it('should fail if a part of the string is upper case', () =>
        strictEqual(isLowerCase('i am partially UPPER CASE'), false));

    it('should fail if a part of the string is a number', () =>
        strictEqual(isLowerCase('i contain a 1337 number '), false));
});
