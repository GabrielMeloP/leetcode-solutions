/*
 * @lc app=leetcode id=2145 lang=typescript
 *
 * [2145] Count the Hidden Sequences
 */

// @lc code=start
function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let current: number = upper
    let max: number = current
    let min: number = current
    
    for (let i = differences.length - 1; i >= 0; i--) {
        current -= differences[i]
        max = Math.max(max, current)
        min = Math.min(min, current)
        if ((max - min) > (upper - lower)) return 0
    }

    return 1 + (upper - max) + (min - lower)
};
// @lc code=end
