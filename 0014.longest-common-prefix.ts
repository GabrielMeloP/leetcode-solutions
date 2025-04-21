/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    const size = strs.length
    const first = strs[0]
    const length = first.length
    let result = ''

    for (let i = 0; i < length; i++) {
        const letter = first[i]
        for (let e = 1; e < size; e++) {
            if (letter !== strs[e][i]) return result
        }
        result += letter
    }

    return result
};
// @lc code=end
