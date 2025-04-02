/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    const text = x.toString()
    const length = text.length

    for (let i = 0; i < length / 2; i++) {
        if (text[i] !== text[length - 1 - i])
            return false
    }

    return true
};
// @lc code=end
