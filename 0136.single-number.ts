/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    let result = 0

    for (let i = nums.length; i >= 0; i--) {
        result ^= nums[i]
    }

    return result
};
// @lc code=end
