/*
 * @lc app=leetcode id=2042 lang=typescript
 *
 * [2042] Check if Numbers Are Ascending in a Sentence
 */

// @lc code=start
function areNumbersAscending(s: string): boolean {
    const words = s.split(' ')
    let lastNumber: number = -1

    for (const word of words) {
        const num = Number(word)
        
        if (isNaN(num)) continue
        if (num <= lastNumber) return false

        lastNumber = num
    }

    return true
};
// @lc code=end
