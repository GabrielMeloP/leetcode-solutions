/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    const sLength = s.length
    const tLength = t.length
    let j = 0

    for (let i = 0; i < tLength && j < sLength; i++) {
        if (t[i] === s[j]) j++
    }
    
    return j === sLength
};
// @lc code=end
