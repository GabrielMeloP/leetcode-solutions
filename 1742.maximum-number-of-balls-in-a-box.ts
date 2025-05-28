/*
 * @lc app=leetcode id=1742 lang=typescript
 *
 * [1742] Maximum Number of Balls in a Box
 */

// @lc code=start
function countBalls(lowLimit: number, highLimit: number): number {
    const sumDigits = (n: number): number => {
        let sum = 0

        while (n > 0) {
            sum += n % 10
            n = Math.floor(n / 10)
        }

        return sum
    }

    const sums: number[] = []
    let lastSum: number = 0

    for (let n = lowLimit; n <= highLimit; n++) {
        if (lastSum === 0 || n % 10 === 0) {
            lastSum = sumDigits(n)
        }
        else lastSum++

        sums[lastSum] = (sums[lastSum] || 0) + 1
    }
    
    let higherSum: number = 0
    for (const sum of sums) {
        if (isNaN(sum)) continue
        higherSum = Math.max(higherSum, sum)
    }

    return higherSum
};
// @lc code=end
