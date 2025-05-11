/*
 * @lc app=leetcode id=1550 lang=typescript
 *
 * [1550] Three Consecutive Odds
 */

// @lc code=start
function threeConsecutiveOdds(arr: number[]): boolean {
    const length = arr.length - 1

    for (let i = 1; i < length; i++) {
        if (
            arr[i - 1] % 2 === 1 &&
            arr[i] % 2 === 1 &&
            arr[i + 1] % 2 === 1
        ) return true
    }

    return false
};
// @lc code=end
