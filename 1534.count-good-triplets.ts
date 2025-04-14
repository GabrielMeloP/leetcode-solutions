/*
 * @lc app=leetcode id=1534 lang=typescript
 *
 * [1534] Count Good Triplets
 */

// @lc code=start
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    const length = arr.length
    let result = 0

    for (let i = 0; i < length - 2; i++) {
        for (let j = i + 1; j < length - 1; j++) {
            if (Math.abs(arr[i] - arr[j]) > a) continue

            for (let k = j + 1; k < length; k++) {
                if (
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                ) result++
            }
        }
    }

    return result
};
// @lc code=end
