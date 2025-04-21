/*
 * @lc app=leetcode id=3396 lang=typescript
 *
 * [3396] Minimum Number of Operations to Make Elements in Array Distinct
 */

// @lc code=start
function minimumOperations(nums: number[]): number {    
    const length = nums.length
    let operations = 0

    for (let i = 0; i < length - 1; i++) {
        if (nums.slice(i + 1).indexOf(nums[i]) >= 0) {
            operations++
            i = operations * 3 - 1
        }
    }

    return operations
};
// @lc code=end
