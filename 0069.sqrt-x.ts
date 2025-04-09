/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
    let n = 1
    
    while (true) {
        const square = n * n
        if (square === x) return n
        if (square > x) return n - 1
        n++
    }
};
// @lc code=end
