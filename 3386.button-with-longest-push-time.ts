/*
 * @lc app=leetcode id=3386 lang=typescript
 *
 * [3386] Button with Longest Push Time
 */

// @lc code=start
function buttonWithLongestTime(events: number[][]): number {
    const length = events.length
    let maxTime: number = 0
    let maxKey: number = 0

    for (let i = 0; i < length; i++) {
        const time = events[i][1] - (events[i - 1]?.[1] ?? 0)

        if (time > maxTime) {
            maxTime = time
            maxKey = events[i][0]
        }
        else if (time === maxTime) {
            maxKey = Math.min(maxKey, events[i][0])
        }
    }
    
    return maxKey
};
// @lc code=end
