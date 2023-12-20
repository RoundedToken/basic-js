const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let ans = '';
    let curr = str[0];
    let count = 1;

    if (str === '') return '';

    for (let i = 1; i < str.length; i++) {
        const char = str[i];

        if (char === curr) {
            count++;
        } else {
            if (count < 2) {
                ans += curr;
            } else {
                ans += `${count}${curr}`;
            }

            count = 1;
            curr = char;
        }
    }

    if (str[str.length - 1] === curr) {
        if (count < 2) {
            ans += curr;
        } else {
            ans += `${count}${curr}`;
        }
    }

    return ans;
}

module.exports = {
    encodeLine,
};
