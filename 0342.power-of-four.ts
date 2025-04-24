/*
 * @lc app=leetcode id=342 lang=typescript
 *
 * [342] Power of Four
 */

// @lc code=start
function isPowerOfFour(n: number): boolean {
    // Log4(n) = Log10(n) / Log10(4)
    return Math.log10(n) / 0.6020599913279624 % 1 === 0
};
// @lc code=end
