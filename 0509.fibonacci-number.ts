/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
function fib(n: number): number {
    if (n < 2) return n
    
    let prev: number = 0
    let curr: number = 1

    while (--n > 0) {
        curr += prev
        prev = curr - prev
    }

    return curr
};
// @lc code=end
