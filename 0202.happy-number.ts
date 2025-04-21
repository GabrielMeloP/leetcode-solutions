/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
    if (n < 10) return n === 1 || n === 7 

    const s = n.toString()
    const length = s.length
    let sum = 0

    for (let i = 0; i < length; i++) {
        sum += Math.pow(parseInt(s[i]), 2)
    }
    
    return isHappy(sum)
};
// @lc code=end
