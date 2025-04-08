/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    const lengthA = a.length
    const lengthB = b.length
    let result = ''
    let addOne = false

    for (let i = 0; i < lengthA || i < lengthB || addOne; i++) {
        const numA = a[lengthA - 1 - i] ?? '0'
        const numB = b[lengthB - 1 - i] ?? '0'

        if (numA === numB) {
            result = (addOne ? '1' : '0') + result
            addOne = numA === '1'
            continue
        }

        if (addOne) {
            result = '0' + result
            addOne = true
            continue
        }

        result = '1' + result
    }

    return result
};
// @lc code=end
