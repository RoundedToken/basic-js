const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const set = new Set();
    const ans = {};

    for (const d of domains) {
        const r = d.split('.').reverse();

        for (const i in r) {
            set.add('.' + r.slice(0, +i + 1).join('.'));
        }
    }

    for (const s of set) {
        let count = 0;

        for (const d of domains) {
            const x = s.slice(1).split('.').reverse().join('.');

            if (d.includes(x)) count++;
        }

        ans[s] = count;
    }

    return ans;
}

module.exports = {
    getDNSStats,
};
