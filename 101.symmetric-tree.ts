/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
    const isMirror = (p: TreeNode | null, q: TreeNode | null): boolean => {
        return (p === null || q === null) ? p === q : (
            (p.val === q.val) &&
            isMirror(p.left, q.right) &&
            isMirror(p.right, q.left)
        )
    }

    return (root.left === null || root.right === null)
        ? root.left === root.right
        : isMirror(root.left, root.right)
};
// @lc code=end
