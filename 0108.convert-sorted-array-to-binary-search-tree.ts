/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const length = nums.length
    if (length === 0) return null

    const middle = Math.floor(length / 2)
    return new TreeNode(
        nums[middle],
        sortedArrayToBST(nums.slice(0, middle)),
        sortedArrayToBST(nums.slice(middle + 1))
    )
};
// @lc code=end
