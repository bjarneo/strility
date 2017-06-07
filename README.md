strility
--
![Travis](https://travis-ci.org/bjarneo/strility.svg?branch=master)

Strility is a string manipulation library

[Work in progress]

Usage
--

```bash
$ npm i --save strility
```

Api
--
```js
const { isUpperCase } = require('strility');

isUpperCase('string')
```
* string, the input string. 
* returns true or false

```js
const { isLowerCase } = require('strility');

isLowerCase('string')
```
* string, the input string. 
* returns true or false

```js
const { isString } = require('strility');

isString('string')
```
* string, the input string. 
* returns true or false

```js
// Uses the Fisher-Yates algorithm
const { shuffle } = require('strility');

shuffle('string') // 'trsgni'
```
* string, the input string. 
* returns shuffled string

```js
const { chars } = require('strility');

chars('string') // [ 's', 't', 'r', 'i', 'n', 'g' ]
```
* string, the input string. 
* returns array of characters

```js
const { surround } = require('strility');

surround('dog', '*') // '*dog*'
```
* string, the input string.
* surround, the substring to surround the input string 
* returns surrounded string

```js
const { replaceAll } = require('strility');

replaceAll(
    'The quick brown fox jumps over the lazy dog', 
    ['quick', 'dog'],
    ['sleepy', 'cat']
);
// The sleepy brown fox jumps over the lazy cat
```
* string, the input string.
* search, the array of search strings 
* replace, the array of replace strings
* returns replaced string

```js
const { swapCase } = require('strility');

swapCase('My STRING has UPPER CASE and lower case') // 'mY string HAS upper case AND LOWER CASE'
```
* string, the input string.
* returns swapped lower/upper case string

Between is an [among](https://github.com/bjarneo/among) proxy
```js
const { between } = require('strility');

const find = between('{{', '}}');

find('The [quick] [brown] {{fox}} $jumps$ over the [lazy] {{dog}}') // [ 'fox', 'dog' ]
```

Tests
--
```bash
$ npm test
```

Contribution
--
Contributions are appreciated.

License
--
MIT-licensed. See LICENSE.
