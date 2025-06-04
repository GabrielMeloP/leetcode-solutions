/*
 * @lc app=leetcode id=1822 lang=typescript
 *
 * [1822] Sign of the Product of an Array
 */

// @lc code=start
function arraySign(nums: number[]): number {
    let prod: number = 1
    for (const num of nums) prod *= num

    return prod > 0 ? 1 : prod < 0 ? -1 : 0
};
// @lc code=end
