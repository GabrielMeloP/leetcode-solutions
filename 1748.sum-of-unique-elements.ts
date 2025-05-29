/*
 * @lc app=leetcode id=1748 lang=typescript
 *
 * [1748] Sum of Unique Elements
 */

// @lc code=start
function sumOfUnique(nums: number[]): number {
    let sum: number = 0

    for (const num of nums) {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) {
            sum += num
        }
    }

    return sum
};
// @lc code=end
