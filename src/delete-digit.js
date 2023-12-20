const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let max = -Infinity;
    let arr = n.toString().split('');

    for (const i in arr) {
        const x = [...arr];
        x.splice(i, 1);
        const newN = +x.join('');
        console.log(newN);
        if (newN > max) {
            max = newN;
        }
    }

    return max;
}

console.log(deleteDigit(152));

module.exports = {
    deleteDigit,
};
