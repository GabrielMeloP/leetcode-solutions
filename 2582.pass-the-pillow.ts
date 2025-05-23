/*
 * @lc app=leetcode id=2582 lang=typescript
 *
 * [2582] Pass the Pillow
 */

// @lc code=start
function passThePillow(n: number, time: number): number {
    return Math.ceil(time / (n - 1)) % 2 === 0 ?
        n - 1 - (time - 1) % (n - 1) : // To the left
        2 + (time - 1) % (n - 1) // To the right
};
// @lc code=end
