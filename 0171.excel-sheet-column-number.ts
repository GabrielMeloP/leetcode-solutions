/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
    const length = columnTitle.length
    let result = 0

    for (let i = 0; i < length; i++) {
        result = result * 26 + (columnTitle.charCodeAt(i) - 64)
    }

    return result
};
// @lc code=end
