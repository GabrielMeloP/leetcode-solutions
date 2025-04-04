/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b)
    const length = nums.length
    const results: string[] = []
    
    const isDuplicate = (triplet: string): boolean => {
        let hasAny = false
        for (const result of results) {
            if (result === triplet) hasAny = true
        }
        return hasAny
    }

    for (let i = 0; nums[i] <= 0; i++) {
        if (nums[i] === nums[i - 1]) continue
        const sum = -nums[i]
        let j = i + 1
        let k = length - 1

        while (j < k) {
            if (nums[j] + nums[k] === sum) {
                const triplet = JSON.stringify([nums[i], nums[j], nums[k]])
                if (!isDuplicate(triplet)) {
                    results.push(triplet)
                    j++
                    continue
                }
            }
            if (nums[j] + nums[k] < sum) j++
            else k--
        }
    }

    const formattedResults: number[][] = []
    for (const triplet of results) {
        formattedResults.push(JSON.parse(triplet))
    }

    return formattedResults
};
// @lc code=end

// console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([0,0,0,0]))
// console.log(threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]))
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))