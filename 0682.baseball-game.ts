/*
 * @lc app=leetcode id=682 lang=typescript
 *
 * [682] Baseball Game
 */

// @lc code=start
function calPoints(operations: string[]): number {
    let sum: number = 0
    const scores: number[] = []

    for (const op of operations) {
        const last = scores.length - 1
        let current: number = 0

        switch(op) {
            case '+':
                current = scores[last] + scores[last - 1]
                scores.push(current)
                break
            case 'D':
                current = scores[last] * 2
                scores.push(current)
                break
            case 'C':
                current = -scores[last]
                scores.pop()
                break
            default:
                current = parseInt(op)
                scores.push(current)
        }
        
        sum += current
    }

    return sum
};
// @lc code=end
