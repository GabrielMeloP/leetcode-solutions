/*
 * @lc app=leetcode id=326 lang=typescript
 *
 * [326] Power of Three
 */

// @lc code=start
function isPowerOfThree(n: number): boolean {
    // Log3(n) = Log10(n) / Log10(3)
    return Math.log10(n) / 0.47712125471966244 % 1 === 0
};
// @lc code=end

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(Math.log10(3))