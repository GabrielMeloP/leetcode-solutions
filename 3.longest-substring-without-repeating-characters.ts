/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const letters = s.split('')
    let unique: string[] = []
    let highest = 0
    
    for (let i = 0; i < letters.length; i++) {
        const l = letters[i]

        if (unique.includes(l)) {
            unique = []
            i = s.lastIndexOf(l, i - 1)
        }
        else unique.push(l)
        
        if (unique.length > highest) highest = unique.length
    }

    return highest
};
// @lc code=end
