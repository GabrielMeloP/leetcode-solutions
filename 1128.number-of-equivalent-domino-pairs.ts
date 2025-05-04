/*
 * @lc app=leetcode id=1128 lang=typescript
 *
 * [1128] Number of Equivalent Domino Pairs
 */

// @lc code=start
function numEquivDominoPairs(dominoes: number[][]): number {
    const counts = new Map<string, number>()

    for (let i = dominoes.length - 1; i >= 0; i--) {
        const ordered = dominoes[i][0] < dominoes[i][1]
            ? `${dominoes[i][0]},${dominoes[i][1]}`
            : `${dominoes[i][1]},${dominoes[i][0]}`

        if (counts.has(ordered)) {
            counts.set(ordered, counts.get(ordered) + 1)
        }
        else counts.set(ordered, 1)
    }

    let result: number = 0
    for (let [piece, count] of counts) {
        while (count > 1) result += --count
    }

    return result
};
// @lc code=end
