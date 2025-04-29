/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
    let pow: number = 0

    for (let i = 1; pow < num; i++) {
        pow = i * i
        if (pow === num) return true
    }

    return false
};
// @lc code=end
