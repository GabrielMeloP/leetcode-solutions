/*
 * @lc app=leetcode id=441 lang=typescript
 *
 * [441] Arranging Coins
 */

// @lc code=start
function arrangeCoins(n: number): number {
    let row: number = 0
    let count: number = 0

    while (count < n) count += ++row
    if (count === n) return row

    return row - 1
};
// @lc code=end
