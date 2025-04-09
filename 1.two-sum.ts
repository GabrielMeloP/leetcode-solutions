/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const length = nums.length

    for (let x = 0; x < length - 1; x++) {
        const match = target - nums[x]
        
        for (let y = x + 1; y < length; y++) {
            if (nums[y] === match) return [x, y]
        }
    }

    return []
};
// @lc code=end
