/*
 * @lc app=leetcode id=2843 lang=typescript
 *
 * [2843]   Count Symmetric Integers
 */

// @lc code=start
function countSymmetricIntegers(low: number, high: number): number {
    let result = 0

    for (let i = low; i <= high; i++) {
        if (i < 10) i = 10 // 1 digit
        else if (i < 100) { // 2 digits
            if (i % 11 === 0) {
                result++
                if (i === 99) i = 1000
                else i += 10
            }
        }
        else if (i < 1000) i = 1000 // 3 digits
        else if (i < 10000) { // 4 digits
            const left = Math.floor(i / 1000) + Math.floor((i % 1000) / 100)
            const right = Math.floor((i % 100) / 10) + (i % 10)
            if (left === right) result++
        }
        else return result // 4+ digits
    }

    return result
};
// @lc code=end
