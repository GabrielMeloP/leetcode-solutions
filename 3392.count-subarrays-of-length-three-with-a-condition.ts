/*
 * @lc app=leetcode id=3392 lang=typescript
 *
 * [3392] Count Subarrays of Length Three With a Condition
 */

// @lc code=start
function countSubarrays(nums: number[]): number {
    let count: number = 0

    for (let i = nums.length - 2; i > 0; i--) {
        if (nums[i] / 2 === nums[i - 1] + nums[i + 1]) {
            count++
        }
    }

    return count
};
// @lc code=end
