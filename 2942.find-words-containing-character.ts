/*
 * @lc app=leetcode id=2942 lang=typescript
 *
 * [2942] Find Words Containing Character
 */

// @lc code=start
function findWordsContaining(words: string[], x: string): number[] {
    const result: number[] = []

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].includes(x)) result.push(i)
    }

    return result
};
// @lc code=end
