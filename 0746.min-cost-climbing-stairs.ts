/*
 * @lc app=leetcode id=746 lang=typescript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
    const length = cost.length
    let plus2: number = 0
    let plus1: number = cost[length - 1]

    for (let i = length - 2; i >= 0; i--) {
        const aux = cost[i] + Math.min(plus1, plus2)
        plus2 = plus1
        plus1 = aux
    }

    return Math.min(plus1, plus2)
};
// @lc code=end

console.log(minCostClimbingStairs([10,15,20])) // 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])) // 6