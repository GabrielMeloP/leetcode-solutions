/*
 * @lc app=leetcode id=3452 lang=typescript
 *
 * [3452] Sum of Good Numbers
 */

// @lc code=start
function sumOfGoodNumbers(nums: number[], k: number): number {
    let count: number = 0

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i - k] && nums[i] <= nums[i - k]) continue
        if (nums[i + k] && nums[i] <= nums[i + k]) continue
        count += nums[i]
    }

    return count
};
// @lc code=end
