/*
 * @lc app=leetcode id=442 lang=typescript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
    const set = new Set<number>()
    const result: number[] = []

    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) result.push(nums[i])
        set.add(nums[i])
    }

    return result
};
// @lc code=end
