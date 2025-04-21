/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    const possibilities: number[] = [0, 1, 2]

    for (let i = 3; i <= n; i++) {
        possibilities[i] = possibilities[i - 1] + possibilities[i - 2]
    }

    return possibilities[n]
};
// @lc code=end
