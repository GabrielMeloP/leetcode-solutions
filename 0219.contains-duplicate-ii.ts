/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const length = nums.length
    const indexes = new Map<number, number>()

    for (let i = 0; i < length; i++) {
        const lastIndex = indexes.get(nums[i])
        if (lastIndex >= 0 && i - lastIndex <= k) return true
        indexes.set(nums[i], i)
    }

    return false
};
// @lc code=end
