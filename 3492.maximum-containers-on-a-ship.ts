/*
 * @lc app=leetcode id=3492 lang=typescript
 *
 * [3492] Maximum Containers on a Ship
 */

// @lc code=start
function maxContainers(n: number, w: number, maxWeight: number): number {
    return Math.min(n ** 2, Math.floor(maxWeight / w))
};
// @lc code=end
