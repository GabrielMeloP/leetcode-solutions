/*
 * @lc app=leetcode id=1925 lang=typescript
 *
 * [1925] Count Square Sum Triples
 */

// @lc code=start
const triples: number[] = [0]

for (let n = 1; n <= 250; n++) {
    let count: number = 0

    for (let a = 1; a < n; a++) {
        for (let b = 1; b < n; b++) {
            if (a ** 2 + b ** 2 === n ** 2) {
                count++
            }
        }
    }

    triples[n] = triples[n - 1] + count
}

function countTriples(n: number): number {
    return triples[n]
};
// @lc code=end
