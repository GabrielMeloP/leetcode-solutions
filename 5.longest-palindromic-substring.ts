/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    const isPalindrome = (text: string): boolean => {
        const length = text.length
        for (let i = 0; i < length / 2; i++) {
            if (text[i] !== text[length - 1 - i])
                return false
        }
        return true
    }

    if (isPalindrome(s)) return s
    const length = s.length
    let longest: string = s[0]

    for (let z = 2; z < length; z++) {
        for (let a = 0; a + z <= length; a++) {
            const fragment = s.substr(a, z)
            if (isPalindrome(fragment) && fragment.length > longest.length) {
                longest = fragment
                break
            }
        }
        if (longest.length < z - 2) break
    }

    return longest
};
// @lc code=end
