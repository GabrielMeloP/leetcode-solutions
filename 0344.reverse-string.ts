/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const length = s.length
    
    for (let i = 0; i < length / 2; i++) {
        const mirror = length - i - 1
        if (mirror === i) break

        const aux = s[i]
        s[i] = s[mirror]
        s[mirror] = aux
    }
};
// @lc code=end

