/*
 * @lc app=leetcode id=3516 lang=typescript
 *
 * [3516] Find Closest Person
 */

// @lc code=start
function findClosest(x: number, y: number, z: number): number {
    const diff1 = Math.abs(x - z)
    const diff2 = Math.abs(y - z)

    if (diff1 < diff2) return 1
    if (diff1 > diff2) return 2
    return 0
};
// @lc code=end
