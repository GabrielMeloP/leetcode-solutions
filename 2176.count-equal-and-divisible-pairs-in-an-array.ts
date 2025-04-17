/*
 * @lc app=leetcode id=2176 lang=typescript
 *
 * [2176] Count Equal and Divisible Pairs in an Array
 */

// @lc code=start
function countPairs(nums: number[], k: number): number {
    let count = 0

    for (let i = nums.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (i * j % k === 0 && nums[i] === nums[j]) {
                count++
            }
        }
    }

    return count
};
// @lc code=end
