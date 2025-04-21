/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
    if (n === 0) return [0]
    if (n === 1) return [0, 1]

    const res: number[] = [0, 1]

    for (let i = 2; i <= n; i++) {
        res.push(1)
        
        for (let j = 1; j < i && i + j <= n; j++) {
            res.push(1 + res[j])
        }

        i += i - 1
    }

    return res
};
// @lc code=end
