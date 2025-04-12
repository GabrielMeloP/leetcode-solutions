/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
    let result = 0
    const s = n.toString(2)
    const length = s.length

    for (let i = 0; i < length; i++) {
        if (s[i] === '1') result++
    }

    return result
};
// @lc code=end
