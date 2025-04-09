/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const list: number[] = [...nums1, ...nums2]
    list.sort((a, b) => a - b)
    
    const middleIndex = (list.length - 1) / 2
    if (middleIndex % 1 === 0) {
        return list[middleIndex]
    }
    else {
        return (list[middleIndex - 0.5] + list[middleIndex + 0.5]) / 2
    }
};
// @lc code=end
