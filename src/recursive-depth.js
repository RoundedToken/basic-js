const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(a, d = 1, ds = []) {
        const subArrs = [];

        for (const el of a) {
            if (Array.isArray(el)) subArrs.push(el);
        }

        if (subArrs.length === 0) {
            ds.push(d);
        } else {
            for (const subArr of subArrs) {
                this.calculateDepth(subArr, d + 1, ds);
            }
        }

        return Math.max(...ds);
    }
}

console.log(
    new DepthCalculator().calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]])
);

module.exports = {
    DepthCalculator,
};
