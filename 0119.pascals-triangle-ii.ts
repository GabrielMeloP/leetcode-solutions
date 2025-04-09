/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    const result: number[] = [1]
    if (rowIndex === 0) return result

    for (let i = 1; i <= rowIndex / 2; i++) {
        result[i] = result[rowIndex - i] = result[i - 1] * (rowIndex - i + 1) / i
    }

    result.push(1)
    return result
};
// @lc code=end

console.log(getRow(1))
console.log(getRow(2))
console.log(getRow(3))
console.log(getRow(4))
console.log(getRow(5))
console.log(getRow(6))
console.log(getRow(7))