const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    const ans = Array(matrix.length)
        .fill()
        .map((_, i) => Array(matrix[i].length).fill());

    for (let i = 0; i < matrix.length; i++) {
        for (let g = 0; g < matrix[i].length; g++) {
            let rowStart = i - 1 < 0 ? 0 : i - 1;
            let rowEnd = i + 1 === matrix.length ? matrix.length - 1 : i + 1;

            let colEnd = g + 1 === matrix[i].length ? matrix[i].length - 1 : g + 1;
            let count = 0;

            for (rowStart; rowStart <= rowEnd; rowStart++) {
                let colStart = g - 1 < 0 ? 0 : g - 1;

                for (colStart; colStart <= colEnd; colStart++) {
                    if (matrix[rowStart][colStart]) {
                        count++;
                    }
                }
            }

            if (matrix[i][g]) count--;
            ans[i][g] = count;
        }
    }

    return ans;
}

console.log(
    minesweeper([
        [true, false, false],
        [false, true, false],
        [false, false, false],
    ])
);

module.exports = {
    minesweeper,
};
