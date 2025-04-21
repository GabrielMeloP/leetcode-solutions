/*
 * @lc app=leetcode id=1668 lang=typescript
 *
 * [1668] Maximum Repeating Substring
 */

// @lc code=start
function maxRepeating(sequence: string, word: string): number {
    const length = sequence.length
    const wordLength = word.length
    let current: number = 0
    let max: number = 0

    for (let i = sequence.indexOf(word); i < length; i++) {
        if (sequence.slice(i, i + wordLength) === word) {
            current++
            i += wordLength - 1
            continue
        }
        
        if (current > 0) {
            max = Math.max(max, current)
            current = 0
            i -= wordLength - 1
        }
    }

    return Math.max(max, current)
};
// @lc code=end
