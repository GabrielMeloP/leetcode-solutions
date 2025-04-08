/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    const length = nums.length
    let uniques = 1

    for (let i = 1; i < length; i++) {
        if (nums[i] > nums[uniques - 1]) {
            if (uniques == i) {
                uniques++
                continue
            }
            nums[uniques] = nums[i]
            if (uniques++ < i) nums[i] = undefined
        }
        else nums[i] = undefined
    }
    return uniques
};
// @lc code=end

// console.log(removeDuplicates([1,1,2])) //2
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
// console.log(removeDuplicates([1,1])) // 1
// console.log(removeDuplicates([1,1,1])) // 1
// console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([1,2])) // 2