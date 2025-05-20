/*
 * @lc app=leetcode id=2293 lang=typescript
 *
 * [2293] Min Max Game
 */

// @lc code=start
function minMaxGame(nums: number[]): number {
    const length = nums.length
    if (length === 1) return nums[0]

    const result: number[] = []

    for (let i = 0; i < length; i += 2) {
        if ((i / 2) % 2 === 0) {
            result.push(Math.min(nums[i], nums[i + 1]))
        }
        else {
            result.push(Math.max(nums[i], nums[i + 1]))
        }
    }

    return minMaxGame(result)
};
// @lc code=end
