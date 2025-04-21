/*
 * @lc app=leetcode id=1137 lang=typescript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
function tribonacci(n: number): number {
    if (n === 0) return 0
    if (n < 2) return 1

    let prev: number = 0
    let curr: number = 1
    let next: number = 1

    while (--n > 1) {
        const aux = prev + curr + next
        prev = curr
        curr = next
        next = aux
    }

    return next
};
// @lc code=end
