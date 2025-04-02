/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    const isNegative = x < 0
    if (isNegative) x *= -1
    let text = x.toString()
    let result = 0

    for (let k = 0; k < text.length; k++) {
        result += Number(text[k]) * Math.pow(10, k)
    }

    if (isNegative) result *= -1
    if (result > 2147483647 || result < -2147483648) return 0
    else return result
};
// @lc code=end
