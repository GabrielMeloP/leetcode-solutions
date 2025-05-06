/*
 * @lc app=leetcode id=1920 lang=typescript
 *
 * [1920] Build Array from Permutation
 */

// @lc code=start
function buildArray(nums: number[]): number[] {
    const result: number[] = []

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] = nums[nums[i]]
    }

    return result
};
// @lc code=end
