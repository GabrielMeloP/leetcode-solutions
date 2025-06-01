/*
 * @lc app=leetcode id=1768 lang=typescript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
function mergeAlternately(word1: string, word2: string): string {
    const l1 = word1.length
    const l2 = word2.length
    const length = Math.min(l1, l2)
    let result: string = ''

    for (let i = 0; i < length; i++) {
        result += word1[i] + word2[i]
    }

    if (l1 > l2) result += word1.slice(l2 - l1)
    else if (l2 > l1) result += word2.slice(l1 - l2)

    return result
};
// @lc code=end

console.log(mergeAlternately("abc", "pqr"))
console.log(mergeAlternately("ab", "pqrs"))
console.log(mergeAlternately("cdf", "a"))