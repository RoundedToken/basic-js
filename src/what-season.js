const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';
    if (!(date instanceof Date)) throw new Error('Invalid date!');
    if (Object.getOwnPropertyNames(date).toString() !== '') throw new Error('Invalid date!');

    const mon = new Date(date.toISOString()).getMonth();

    if ([11, 0, 1].includes(mon)) return 'winter';
    else if ([2, 3, 4].includes(mon)) return 'spring';
    else if ([5, 6, 7].includes(mon)) return 'summer';
    else return 'autumn';
}

// console.log(getSeason(new Date(2020, 02, 31)));
// console.log(getSeason('sds'));
// getSeason();
// console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(new Map())));
// getSeason(new Date(2020, 02, 31));
module.exports = {
    getSeason,
};
