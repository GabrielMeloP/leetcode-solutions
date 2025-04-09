/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const reverse: number[] = []
    let sum: number
    let rest = 0

    do {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + rest

        if (sum >= 10) {
            rest = Math.floor(sum / 10)
            sum %= 10
        }
        else rest = 0

        reverse.push(sum)
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    } while (l1 || l2 || rest)
    
    return reverse.reverse().reduce<ListNode | null>((ln, num) => {
        return new ListNode(num, ln)
    }, null)
};
// @lc code=end
