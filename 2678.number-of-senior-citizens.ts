/*
 * @lc app=leetcode id=2678 lang=typescript
 *
 * [2678] Number of Senior Citizens
 */

// @lc code=start
function countSeniors(details: string[]): number {
    let result: number = 0

    for (const detail of details) {
        const age = +detail.slice(11, -2)
        if (age > 60) result++
    }

    return result
};
// @lc code=end
