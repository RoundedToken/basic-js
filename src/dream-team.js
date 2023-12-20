const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    let ans = [];

    if (!Array.isArray(members)) return false;

    for (let m of members) {
        if (typeof m === 'string') {
            m = m.trim();
            ans.push(m[0].toUpperCase());
        }
    }

    return ans.sort().join('');
}

module.exports = {
    createDreamTeam,
};
