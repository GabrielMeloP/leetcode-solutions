/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    while (true) {
        if (
            s.indexOf('()') >= 0 ||
            s.indexOf('[]') >= 0 ||
            s.indexOf('{}') >= 0
        ) {
            s = s.replace('()', '')
            s = s.replace('[]', '')
            s = s.replace('{}', '')
            if (s.length === 0) return true
        }
        else return false
    }
};
// @lc code=end
