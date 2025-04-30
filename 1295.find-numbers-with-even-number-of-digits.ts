/*
 * @lc app=leetcode id=1295 lang=typescript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
function findNumbers(nums: number[]): number {
    let count: number = 0

    for (const num of nums) {
        if (Math.floor(Math.log10(num) + 1) % 2 === 0) {
            count++
        }
    }

    return count
};
// @lc code=end
