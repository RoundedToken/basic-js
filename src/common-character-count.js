const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    const map = new Map();
    let ans = 0;

    for (const c of s1) {
        const count = map.get(c);

        if (count === undefined) map.set(c, 1);
        else map.set(c, count + 1);
    }

    for (const c of s2) {
        const count = map.get(c);

        if (count > 0) {
            ans++;
            map.set(c, count - 1);
        }
    }

    return ans;
}

module.exports = {
    getCommonCharacterCount,
};
