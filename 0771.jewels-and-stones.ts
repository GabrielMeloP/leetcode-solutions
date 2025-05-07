/*
 * @lc app=leetcode id=771 lang=typescript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
function numJewelsInStones(jewels: string, stones: string): number {
    let result: number = 0

    for (let i = stones.length - 1; i >= 0; i--) {
        if (jewels.includes(stones[i])) {
            result++
        }
    }

    return result
};
// @lc code=end
