/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) return null
    let nextNode: ListNode | null = head

    do {
        nextNode = nextNode.next
    } while (nextNode && nextNode.val === head.val)

    return new ListNode(head.val, deleteDuplicates(nextNode))
};
// @lc code=end
