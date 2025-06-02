/*
 * @lc app=leetcode id=997 lang=typescript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
    const count: number[] = Array(n).fill(0)
    const trusts: boolean[] = Array(n).fill(false)
    
    for (const [a, b] of trust) {
        trusts[a - 1] = true
        count[b - 1]++
    }
    
    const judgeIndex = count.indexOf(n - 1)
    return (judgeIndex > -1 && !trusts[judgeIndex]) ? judgeIndex + 1 : -1 
};
// @lc code=end
