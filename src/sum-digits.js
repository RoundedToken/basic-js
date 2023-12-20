const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    while (n >= 10) {
        n = n
            .toString()
            .split('')
            .reduce((acc, v) => (acc += +v), 0);
    }

    return n;
}

console.log(getSumOfDigits(91));
console.log(getSumOfDigits(100));
console.log(getSumOfDigits(35));
console.log(getSumOfDigits(99));
console.log(getSumOfDigits(123));

module.exports = {
    getSumOfDigits,
};
