const among = require('among');

module.exports = function between(start, end, preserve) {
    const find = among(start, end, preserve);

    return str => find(str);
}
