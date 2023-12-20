const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
    chain: [],

    getLength() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    },
    addLink(value) {
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        position -= 1;
        if (
            this.chain.length === 0 ||
            !Number.isInteger(position) ||
            position < 0 ||
            position > this.chain.length - 1
        ) {
            this.chain = [];
            throw Error("You can't remove incorrect link!");
        } else {
            this.chain.splice(position, 1);
            return this;
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const ans = this.chain.map((v) => `( ${v} )`).join('~~');

        this.chain = [];

        return ans;
    },
};

// console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));

module.exports = {
    chainMaker,
};
