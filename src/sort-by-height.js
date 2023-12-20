const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const sorted = arr.filter((v) => v !== -1).sort((a, b) => b - a);
    const ans = [];
    for (const el of arr) {
        if (el === -1) ans.push(-1);
        else {
            ans.push(sorted.pop());
        }
    }
    return ans;
}

module.exports = {
    sortByHeight,
};
