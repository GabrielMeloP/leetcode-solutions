/*
 * @lc app=leetcode id=3330 lang=typescript
 *
 * [3330] Find the Original Typed String I
 */

// @lc code=start
function possibleStringCount(word: string): number {
    let count: number = 1

    for (let i = word.length - 2; i >= 0; i--) {
        if (word[i] === word[i + 1]) count++
    }

    return count
};
// @lc code=end
