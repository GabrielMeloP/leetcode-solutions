/*
 * @lc app=leetcode id=75 lang=typescript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const map: number[] = [0, 0, 0]
    for (const num of nums) map[num]++

    let i: number = 0
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < map[j]; k++) {
            nums[i++] = j
        }
    }
};
// @lc code=end
