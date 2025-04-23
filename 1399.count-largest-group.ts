/*
 * @lc app=leetcode id=1399 lang=typescript
 *
 * [1399] Count Largest Group
 */

// @lc code=start
function countLargestGroup(n: number): number {
    const groups = new Map<number, number>()
    let maxCount: number = 0

    for (let i = 1; i <= n; i++) {
        let group: number = 0

        for (let k = i; k > 0; k = Math.floor(k / 10)) {
            group += k % 10
        }
        
        const count = (groups.get(group) ?? 0) + 1
        groups.set(group, count)
        maxCount = Math.max(maxCount, count)
    }

    let result: number = 0

    for (const [group, count] of groups) {
        if (count === maxCount) result++
    }
    
    return result
};
// @lc code=end
