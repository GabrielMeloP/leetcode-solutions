/*
 * @lc app=leetcode id=3024 lang=typescript
 *
 * [3024] Type of Triangle
 */

// @lc code=start
function triangleType(nums: number[]): string {
    let sum: number = 0
    let max: number = 0
    
    for (let i = 0; i < 3; i++) {
        sum += nums[i]
        max = Math.max(max, nums[i])
    }

    if (max >= sum / 2) return 'none'

    if (nums[0] === nums[1] && nums[1] === nums[2]) {
        return 'equilateral'
    }
    
    if (nums[0] === nums[1] || nums[1] === nums[2] || nums[0] === nums[2]) {
        return 'isosceles'
    }

    return 'scalene'
};
// @lc code=end
