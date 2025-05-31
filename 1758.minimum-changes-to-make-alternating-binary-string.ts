/*
 * @lc app=leetcode id=1758 lang=typescript
 *
 * [1758] Minimum Changes To Make Alternating Binary String
 */

// @lc code=start
function minOperations(s: string): number {
    const length = s.length
    let different: number = 0

    for (let i = 0; i < length; i++) {
        if (+s[i] !== i % 2) {
            different++
        }
    }

    return Math.min(different, length - different)
};
// @lc code=end
