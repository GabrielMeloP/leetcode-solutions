/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
    const result: number[][] = [[1]]

    for (let i = 1; i < numRows; i++) {
        const prevRow = result[i - 1]
        result[i] = []
        for (let j = 0; j <= i; j++) {
            result[i].push((prevRow[j - 1] ?? 0)  + (prevRow[j] ?? 0))
        }
    }
    
    return result
};
// @lc code=end
