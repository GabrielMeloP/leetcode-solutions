/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    const length = prices.length
    let highest = prices[length - 1]
    let max = 0

    for (let i = prices.length - 2; i >= 0; i--) {
        highest = Math.max(prices[i + 1], highest) 
        max = Math.max(highest - prices[i], max)
    }

    return max
};
// @lc code=end
