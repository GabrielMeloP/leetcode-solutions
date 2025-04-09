/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    const length = nums.length
    let found = 0

    for (let i = 0; i < length; i++) {
        if (nums[i] === val) {
            nums[i] = undefined
            found++
            continue
        }
        if (found === 0) continue
        nums[i - found] = nums[i]
        nums[i] = undefined
    }

    return length - found
};
// @lc code=end
