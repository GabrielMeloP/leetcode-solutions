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
        for (let j = i + 1; j < length; j++) {
            if (nums[i] === nums[j]) {
                operations++
                i = operations * 3 - 1
                break
            }
        }
    }

    return operations
};
// @lc code=end

console.log(minimumOperations([1,2,3,4,2,3,3,5,7]))