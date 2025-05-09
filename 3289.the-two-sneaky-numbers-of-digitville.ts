/*
 * @lc app=leetcode id=3289 lang=typescript
 *
 * [3289] The Two Sneaky Numbers of Digitville
 */

// @lc code=start
function getSneakyNumbers(nums: number[]): number[] {
    const set = new Set<number>()
    const result: number[] = []

    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) result.push(nums[i])
        set.add(nums[i])
    }

    return result
};
// @lc code=end
