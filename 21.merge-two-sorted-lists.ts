/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const nums: number[] = []

    while (list1 || list2) {
        if (list1 && (!list2 || list1.val < list2.val)) {
            nums.push(list1.val)
            list1 = list1.next
        }
        else {
            nums.push(list2.val)
            list2 = list2.next
        }
    }

    let result: ListNode | null = null
    for (let i = nums.length - 1; i >= 0; i--) {
        result = new ListNode(nums[i], result)
    }
    return result
};
// @lc code=end
