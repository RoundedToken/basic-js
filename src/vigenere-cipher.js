const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isNotReverse = true) {
        this.isNotReverse = isNotReverse;
    }

    encrypt(value, key) {
        if (!value || !key) throw new Error('Incorrect arguments!');
        if (typeof value !== 'string' || typeof key !== 'string')
            throw new Error('Incorrect arguments!');

        const origin = value.split(' ');
        const encoded = [];
        let keyI = 0;

        for (const w of origin) {
            const newW = [];

            for (const char of w) {
                const isSymb = char.toUpperCase() === char.toLowerCase();
                const shift = key[keyI % key.length].toUpperCase().charCodeAt() - 65;
                const code = char.toUpperCase().charCodeAt() - 65;
                const afterShift = String.fromCharCode(((shift + code) % 26) + 65);

                if (isSymb) {
                    newW.push(char);
                } else {
                    newW.push(afterShift);
                }

                keyI++;
            }

            encoded.push(this.isNotReverse ? newW.join('') : newW.reverse().join(''));
        }

        return this.isNotReverse ? encoded.join(' ') : encoded.reverse().join(' ');
    }

    decrypt(value, key) {
        if (!value || !key) throw new Error('Incorrect arguments!');
        if (typeof value !== 'string' || typeof key !== 'string')
            throw new Error('Incorrect arguments!');

        const origin = value.split(' ');
        const encoded = [];
        let keyI = 0;

        for (const w of origin) {
            const newW = [];

            for (const char of w) {
                const isSymb = char.toUpperCase() === char.toLowerCase();
                const shift = key[keyI % key.length].toUpperCase().charCodeAt() - 65;
                const code = char.toUpperCase().charCodeAt() - 65;
                const diff = code - shift;
                const afterShift = String.fromCharCode((diff < 0 ? 26 + diff : diff) + 65);

                if (isSymb) {
                    newW.push(char);
                } else {
                    newW.push(afterShift);
                }

                keyI++;
            }

            encoded.push(this.isNotReverse ? newW.join('') : newW.reverse().join(''));
        }

        return this.isNotReverse ? encoded.join(' ') : encoded.reverse().join(' ');
    }
}

const xR = new VigenereCipheringMachine(false);
const x = new VigenereCipheringMachine();
console.log(x.encrypt('attack at dawn!', 'alphonse'));
console.log(x.decrypt('AEIHQX SX DLLU!', 'alphonse'));
console.log(xR.encrypt('attack at dawn!', 'alphonse'));

console.log(xR.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
    VigenereCipheringMachine,
};
