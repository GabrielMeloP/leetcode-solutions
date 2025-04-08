/*
 * @lc app=leetcode id=416 lang=typescript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
    // Get the half of the total sum
    let sum = 0
    for (const num of nums) sum += num
    sum /= 2
    
    // Return false if total sum is odd
    if (sum % 1 > 0) return false
    
    // Find partial sum = half of the total sum
    const isPossible: boolean[] = [true]
    for (const num of nums) {
        for (let i = sum; i >= 0; i--) {
            if (isPossible[i] && (i + num) <= sum) {
                if (i + num === sum) return true
                else isPossible[i + num] = true
            }
        }
    }

    return false
};
// @lc code=end
