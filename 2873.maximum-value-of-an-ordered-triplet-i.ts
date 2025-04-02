/*
 * @lc app=leetcode id=2873 lang=typescript
 *
 * [2873] Maximum Value of an Ordered Triplet I
 */

// @lc code=start
function maximumTripletValue(nums: number[]): number {
    let highest = 0
    for (let i = 0; i < nums.length - 2; i ++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const value = (nums[i] - nums[j]) * nums[k]
                if (value > highest) highest = value
            }
        }
    }
    return highest
};
// @lc code=end

