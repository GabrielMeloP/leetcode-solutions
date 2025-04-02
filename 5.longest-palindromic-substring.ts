/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    if (isPalindrome(s)) return s
    const length = s.length
    let longest: string = s[0]

    for (let z = 2; z < length; z++) {
        for (let a = 0; a + z <= length; a++) {
            const fragment = s.substr(a, z)
            if (isPalindrome(fragment) && fragment.length > longest.length) {
                longest = fragment
                break
            }
        }
        if (longest.length < z - 2) break
    }

    return longest
};

function getReverse(s: string): string {
    let reverse = ''
    for (const l of s) reverse = l + reverse
    return reverse
}

function isPalindrome(s: string): boolean {
    const length = s.length
    const halfSize = Math.ceil(length / 2)
    const indexEnd = length % 2 === 0 ? halfSize : halfSize - 1
    return s.substring(0, halfSize) === getReverse(s.substring(indexEnd))
}
// @lc code=end
