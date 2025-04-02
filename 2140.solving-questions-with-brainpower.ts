/*
 * @lc app=leetcode id=2140 lang=typescript
 *
 * [2140] Solving Questions With Brainpower
 */

// @lc code=start
function mostPoints(questions: number[][]): number {
    const maxFromIndex: number[] = []
    
    for (let k = questions.length - 1; k >= 0; k--) {
        const take = questions[k][0] +
            (maxFromIndex[k + 1 + questions[k][1]] ?? 0)
        const skip = maxFromIndex[k + 1] ?? 0
        maxFromIndex[k] = Math.max(take, skip)
    }

    return maxFromIndex[0]
};
// @lc code=end

