/*
 * @lc app=leetcode id=3033 lang=typescript
 *
 * [3033] Modify the Matrix
 */

// @lc code=start
function modifiedMatrix(matrix: number[][]): number[][] {
    const lengthY = matrix.length
    const lengthX = matrix[0].length

    for (let x = 0; x < lengthX; x++) {
        let highest = -1

        for (let y = 0; y < lengthY; y++) {
            highest = Math.max(highest, matrix[y][x])
        }

        for (let y = 0; y < lengthY; y++) {
            if (matrix[y][x] === -1) {
                matrix[y][x] = highest
            }
        }
    }
    
    return matrix
};
// @lc code=end

console.log(modifiedMatrix([[1,2,-1],[4,-1,6],[7,8,9]])) // [[1,2,9],[4,8,6],[7,8,9]]