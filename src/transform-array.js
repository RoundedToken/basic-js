const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    const ans = [];
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    const reserved = ['--discard-next', '--discard-prev', '--double-prev', '--double-next'];

    for (const i in arr) {
        const el = arr[i];
        const prev = arr[+i - 1];
        const next = arr[+i + 1];

        if (el === null) continue;

        if (el === '--discard-next') {
            arr[+i + 1] = null;
        } else if (el === '--discard-prev' && !reserved.includes(prev) && prev !== null) {
            ans.pop();
        } else if (el === '--double-prev' && !reserved.includes(prev) && prev !== null) {
            prev !== undefined ? ans.push(prev) : null;
        } else if (el === '--double-next' && !reserved.includes(next)) {
            next !== undefined ? ans.push(next) : null;
        } else if (!reserved.includes(el) && el !== null && el !== undefined) {
            ans.push(el);
        }
    }

    return ans;
}


console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]));
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));



module.exports = {
    transform,
};
