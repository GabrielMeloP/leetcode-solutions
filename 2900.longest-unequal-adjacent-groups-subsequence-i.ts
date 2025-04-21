/*
 * @lc app=leetcode id=2900 lang=typescript
 *
 * [2900] Longest Unequal Adjacent Groups Subsequence I
 */

// @lc code=start
function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const length = words.length
    const result: string[] = []
    result.push(words[0])

    for (let i = 1; i < length; i++) {
        if (groups[i] === groups[i - 1]) continue
        result.push(words[i])
    }

    return result
};
// @lc code=end
