/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    const length = s.length

    for (let i = 0; i < length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false
        }
    }

    return true
};
// @lc code=end
