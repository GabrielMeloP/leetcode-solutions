/*
 * @lc app=leetcode id=2874 lang=typescript
 *
 * [2874] Maximum Value of an Ordered Triplet II
 */

// @lc code=start
function maximumTripletValue(nums: number[]): number {
    const length = nums.length
    const maxI: number[] = [nums[0]]
    const maxK: number[] = []
    maxK[length - 1] = nums[length - 1]

    for (let j = 1; j < length - 1; j++) {
        // Find the highest before
        maxI[j] = Math.max(nums[j - 1], maxI[j - 1])

        // Find the highest after
        const previousK = length - j
        maxK[previousK - 1] = Math.max(nums[previousK], maxK[previousK])
    }

    let highest = 0
    for (let x = 0; x < length; x++) {
        const triplet = (maxI[x] - nums[x]) * maxK[x]
        if (triplet > highest) highest = triplet
    }

    return highest
};
// @lc code=end
