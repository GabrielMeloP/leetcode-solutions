/*
 * @lc app=leetcode id=1863 lang=typescript
 *
 * [1863] Sum of All Subset XOR Totals
 */

// @lc code=start
function subsetXORSum(nums: number[]): number {
    // Sum all numbers using OR
    let sumOR = 0
    for (const num of nums) sumOR |= num

    // Shift n-1 bits to the left
    return sumOR << (nums.length - 1)
};
// @lc code=end
