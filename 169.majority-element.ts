/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    const length = nums.length
    let num = nums[0]
    let count = 1

    for (let i = 1; i < length; i++) {
        if (nums[i] === num) {
            count++
            continue
        }
        
        count--
        
        if (count === 0) {
            num = nums[i]
            count++
        }
    }

    return num
};
// @lc code=end
