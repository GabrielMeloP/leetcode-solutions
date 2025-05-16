/*
 * @lc app=leetcode id=2129 lang=typescript
 *
 * [2129] Capitalize the Title
 */

// @lc code=start
function capitalizeTitle(title: string): string {
    const words = title.split(' ')

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i].length < 3) words[i] = words[i].toLowerCase()
        else words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase()
    }

    return words.join(' ')
};
// @lc code=end
