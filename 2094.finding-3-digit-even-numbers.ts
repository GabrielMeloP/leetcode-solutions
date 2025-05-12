/*
 * @lc app=leetcode id=2094 lang=typescript
 *
 * [2094] Finding 3-Digit Even Numbers
 */

// @lc code=start
function findEvenNumbers(digits: number[]): number[] {
    const length = digits.length
    const set = new Set<number>()

    for (let i = 0; i < length; i++) {
        if (digits[i] === 0) continue

        for (let j = 0; j < length; j++) {
            if (j === i) continue

            for (let k = 0; k < length; k++) {
                if (k === i || k === j || digits[k] % 2 !== 0) continue
                set.add(digits[i] * 100 + digits[j] * 10 + digits[k])
            }
        }
    }

    const result = Array.from(set).sort()
    return result
};
// @lc code=end

console.log(findEvenNumbers([2,1,3,0])) // [102,120,130,132,210,230,302,310,312,320]
console.log(findEvenNumbers([2,2,8,8,2])) // [222,228,282,288,822,828,882]