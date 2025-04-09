/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
    let maxArea = 0
    let i = 0
    let j = height.length - 1

    while (i < j) {
        maxArea = Math.max(Math.min(height[i], height[j]) * (j - i), maxArea)
        if (height[i] <= height[j]) i++
        else j--
    }

    return maxArea
};
// @lc code=end
