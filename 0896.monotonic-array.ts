/*
 * @lc app=leetcode id=896 lang=typescript
 *
 * [896] Monotonic Array
 */

// @lc code=start
function isMonotonic(nums: number[]): boolean {
    const length = nums.length
    let isIncreasing = nums[0] <= nums[length - 1]
    let isDecreasing = nums[0] >= nums[length - 1]

    for (let i = 1; i < length; i++) {
        if (isIncreasing && nums[i - 1] > nums[i]) {
            isIncreasing = false
        }

        if (isDecreasing && nums[i - 1] < nums[i]) {
            isDecreasing = false
        }

        if (!isIncreasing && !isDecreasing) return false
    }
    
    return true
};
// @lc code=end
