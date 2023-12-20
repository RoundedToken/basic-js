const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    const {
        repeatTimes,
        separator = '+',
        addition,
        additionRepeatTimes,
        additionSeparator = '|',
    } = options;

    const add =
        addition === undefined
            ? ''
            : Array(additionRepeatTimes ?? 1)
                  .fill(addition ?? String(addition))
                  .join(additionSeparator);

    return Array(repeatTimes)
        .fill((str ?? String(str)) + add)
        .join(separator);
}

module.exports = {
    repeater,
};
