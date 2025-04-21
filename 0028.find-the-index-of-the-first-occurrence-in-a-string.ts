/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    const hLength = haystack.length
    const nLength = needle.length

    for (let i = 0; i <= hLength - nLength; i++) {
        let match = true
        for (let j = 0; j < nLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false
                break
            }
        }
        if (match) return i
    }

    return -1
};
// @lc code=end
