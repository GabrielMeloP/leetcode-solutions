/*
 * @lc app=leetcode id=3512 lang=typescript
 *
 * [3512] Minimum Operations to Make Array Sum Divisible by K
 */

// @lc code=start
function minOperations(nums: number[], k: number): number {
    let sum: number = 0
    for (const num of nums) sum += num

    return sum % k
};
// @lc code=end
