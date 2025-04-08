/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    const length = nums.length

    if (target <= nums[0]) return 0
    if (target > nums[length - 1]) return length
    
    for (let i = 1; i < length; i++) {
        if (
            nums[i] === target ||
            (nums[i -1] < target && nums[i] > target)
        ) return i
    }
};
// @lc code=end
