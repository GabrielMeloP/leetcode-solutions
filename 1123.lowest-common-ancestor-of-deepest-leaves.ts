/*
 * @lc app=leetcode id=1123 lang=typescript
 *
 * [1123] Lowest Common Ancestor of Deepest Leaves
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

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
    interface Deepest {
        node: TreeNode | null,
        level: number
    }
    
    const getDeepest = (node: TreeNode | null): Deepest => {
        if (node === null) return { node: null, level: 0 }

        const { node: nodeL, level: levelL } = getDeepest(node.left)
        const { node: nodeR, level: levelR } = getDeepest(node.right)

        if (levelL > levelR) return { node: nodeL, level: levelL + 1 }
        else if (levelR > levelL) return { node: nodeR, level: levelR + 1 }
        else return { node, level: levelL + 1 }
    }

    return getDeepest(root).node
};
// @lc code=end

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
