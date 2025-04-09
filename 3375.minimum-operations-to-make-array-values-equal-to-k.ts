/*
 * @lc app=leetcode id=3375 lang=typescript
 *
 * [3375] Minimum Operations to Make Array Values Equal to K
 */

// @lc code=start
function minOperations(nums: number[], k: number): number {
    const distinct = new Set<number>()

    for (const num of nums) {
        if (num < k) return -1
        if (num > k) distinct.add(num)
    }

    return distinct.size
};
// @lc code=end
