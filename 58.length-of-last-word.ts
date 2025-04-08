/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    let result = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            result++
            continue
        }
        if (result > 0) return result
    }

    return result
};
// @lc code=end
