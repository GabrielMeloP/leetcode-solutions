/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z\d]/g, '').toLocaleLowerCase()
    const length = s.length

    for (let i = 0; i < length / 2; i++) {
        if (s[i] !== s[length - 1 - i]) return false
    }

    return true
};
// @lc code=end
