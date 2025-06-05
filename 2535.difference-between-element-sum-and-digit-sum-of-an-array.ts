/*
 * @lc app=leetcode id=2535 lang=typescript
 *
 * [2535] Difference Between Element Sum and Digit Sum of an Array
 */

// @lc code=start
function differenceOfSum(nums: number[]): number {
    let elementSum: number = 0
    let digitSum: number = 0

    for (let num of nums) {
        elementSum += num

        while (num > 0) {
            digitSum += num % 10
            num = Math.floor(num / 10)
        }
    }

    return Math.abs(elementSum - digitSum)
};
// @lc code=end
