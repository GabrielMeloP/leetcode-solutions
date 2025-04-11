/*
 * @lc app=leetcode id=2843 lang=typescript
 *
 * [2843]   Count Symmetric Integers
 */

// @lc code=start
function countSymmetricIntegers(low: number, high: number): number {
    let result = 0

    for (let i = low; i <= high; i++) {
        let length: number

        if (i < 10) { i = 9; continue }
        else if (i < 100) { length = 2 }
        else if (i < 1000) { i = 999; continue }
        else if (i < 10000) { length = 4 }
        else return result

        const n = i.toString()
        let left = 0
        let right = 0

        for (let j = 0; j < length / 2; j++) {
            left += parseInt(n[j])
            right += parseInt(n[length - 1 - j])
        }

        if (left === right) result++
    }

    return result
};
// @lc code=end
