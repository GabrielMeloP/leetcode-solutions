/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    /*
        evn         evn
        evn     odd evn     odd
        evn odd     evn odd
        odd         odd
    */
    if (numRows === 1) return s
    const groupSize = numRows - 1
    const result: string[] = []

    for (let k = 0; k < s.length; k++) {
        const groupPosition = k % (groupSize * 2)
        const currIndex = (groupPosition < groupSize)
            ? groupPosition
            : groupSize * 2 - groupPosition
        /*
            Even groups: 0 .. 1 .. 2
            Odd groups: 3 .. 2 .. 1
        */
        result[currIndex] = (result[currIndex] ?? '') + s[k]
    }

    return result.join('')
};
// @lc code=end
