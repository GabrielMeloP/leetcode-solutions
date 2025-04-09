/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    let addOne = true

    for (let i = digits.length - 1; i >= 0 && addOne; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
            addOne = true
            continue
        }
        digits[i] += 1
        addOne = false
    }
    
    return addOne ? [1, ...digits] : digits
};
// @lc code=end
