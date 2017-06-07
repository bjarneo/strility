module.exports = function replaceAll(str, search, replace) {
    if (!Array.isArray(search)) {
        search = [search];
    }

    if (!Array.isArray(replace)) {
        replace = [replace];
    }

    const len = search.length;
    let i = 0;

    while (i < len) {
        str = str.replace(
            new RegExp(search[i], 'g'),
            replace.length > 1 ? replace[i] : replace[0]
        );

        i++;
    }

    return str;
};
