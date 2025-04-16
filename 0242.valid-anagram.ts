/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    const sLetters = new Map<string, number>()

    for (let i = s.length - 1; i >= 0; i--) {
        const letter = s[i]
        sLetters.set(letter, (sLetters.get(letter) ?? 0) + 1)
    }

    for (let i = t.length - 1; i >= 0; i--) {
        const count = sLetters.get(t[i])
        if (count === undefined || count === 0) return false

        if (count === 1) sLetters.delete(t[i])
        else sLetters.set(t[i], count - 1)
    }

    return sLetters.size === 0
};
// @lc code=end
