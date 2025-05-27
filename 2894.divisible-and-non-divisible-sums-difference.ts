/*
 * @lc app=leetcode id=2894 lang=typescript
 *
 * [2894] Divisible and Non-divisible Sums Difference
 */

// @lc code=start
function differenceOfSums(n: number, m: number): number {
    let num1: number = 0
    let num2: number = 0

    for (let i = 1; i <= n; i++) {
        if (i % m == 0) num2 += i
        else num1 += i
    }
    
    return num1 - num2
};
// @lc code=end
