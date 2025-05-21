/*
 * @lc app=leetcode id=961 lang=typescript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
function repeatedNTimes(nums: number[]): number {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums.indexOf(nums[i]) !== i) return nums[i]
    }

    return -1
};
// @lc code=end
