/*
 * @lc app=leetcode id=3110 lang=typescript
 *
 * [3110] Score of a String
 */

// @lc code=start
function scoreOfString(s: string): number {
    const length = s.length
    let score = 0

    for (let i = 1; i < length; i++) {
        score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1))
    }

    return score
};
// @lc code=end
