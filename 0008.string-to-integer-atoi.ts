/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    const length = s.length
    let n = ''
    let isNegative = false

    for (let i = 0; i < length; i++) {
        const char = s[i]
        if (char >= '0' && char <= '9') n += char
        else if (n.length === 0) {
            if (char === ' ') continue
            if (char === '-') {
                isNegative = true
                n = '-0'
            }
            else if (char === '+') {
                n = '+0'
            }
            else break
        }
        else break
    }

    const result = Number(n)
    if (isNegative) return Math.max(-2147483648, result)
    else return Math.min(2147483647, result)
};
// @lc code=end
