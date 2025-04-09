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

console.log(climbStairs(2)) // 2
console.log(climbStairs(3)) // 3
console.log(climbStairs(4)) // 5
console.log(climbStairs(5)) // 8