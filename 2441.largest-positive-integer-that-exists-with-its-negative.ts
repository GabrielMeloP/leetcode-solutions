/*
 * @lc app=leetcode id=2441 lang=typescript
 *
 * [2441] Largest Positive Integer That Exists With Its Negative
 */

// @lc code=start
function findMaxK(nums: number[]): number {
    let max: number = -1

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] > max && nums.indexOf(-nums[i]) >= 0) {
            max = nums[i]
        }
    }
    
    return max
};
// @lc code=end
