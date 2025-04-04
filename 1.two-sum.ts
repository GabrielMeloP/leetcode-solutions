/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    for (let x = 0; x < nums.length - 1; x++) {
        for (let y = x + 1; y < nums.length; y++) {
            if (nums[x] + nums[y] === target) return [x, y]
        }
    }
    return []
};
// @lc code=end
