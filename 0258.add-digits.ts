/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
    if (num < 10) return num
    
    const str = num.toString()
    let sum: number = 0

    for (let i = str.length - 1; i >= 0; i--) {
        sum += parseInt(str[i])
    }

    return addDigits(sum)
};
// @lc code=end

console.log(addDigits(38))