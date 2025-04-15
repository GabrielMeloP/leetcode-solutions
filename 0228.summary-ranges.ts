/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
    const length = nums.length
    const result: string[] = []

    for (let i = 0; i < length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            if (nums[i + 1] === nums[i] + 1) continue
            result[result.length - 1] += '->' + nums[i].toString()
            continue
        }

        result.push(nums[i].toString())
    }

    return result
};
// @lc code=end
