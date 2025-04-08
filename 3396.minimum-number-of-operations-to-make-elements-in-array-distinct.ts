/*
 * @lc app=leetcode id=3396 lang=typescript
 *
 * [3396] Minimum Number of Operations to Make Elements in Array Distinct
 */

// @lc code=start
function minimumOperations(nums: number[]): number {
    const isDistinct = (): boolean => {
        const length = nums.length
        for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
                if (nums[i] === nums[j]) return false
            }
        }
        return true
    }
    
    let operations = 0
    while (!isDistinct()) {
        nums = nums.slice(3)
        operations++
    }
    return operations
};
// @lc code=end
