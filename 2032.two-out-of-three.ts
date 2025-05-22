/*
 * @lc app=leetcode id=2032 lang=typescript
 *
 * [2032] Two Out of Three
 */

// @lc code=start
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    const result: number[] = []

    for (let i = 1; i <= 100; i++) {
        const count = (nums1.includes(i) ? 1 : 0) + (nums2.includes(i) ? 1 : 0)

        if (count === 2) result.push(i)
        else if (count === 1 && nums3.includes(i)) {
            result.push(i)
        }
    }

    return result
};
// @lc code=end
