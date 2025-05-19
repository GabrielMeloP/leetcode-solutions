/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const length = s.length
    const stack: string[] = []

    for (let i = 0; i < length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
            continue
        }

        if (stack.length === 0) return false
        
        const last = stack.pop()
        if (
            last === '(' && s[i] !== ')' ||
            last === '[' && s[i] !== ']' ||
            last === '{' && s[i] !== '}'
        ) return false
    }
    
    return stack.length === 0
};
// @lc code=end
