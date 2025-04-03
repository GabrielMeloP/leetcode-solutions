/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const length = s.length
    let num = 0

    for (let k = 0; k < length; k++) {
        switch (s[k]) {
            case 'M':
                num += 1000
                break
            case 'D':
                num += 500
                break
            case 'C':
                switch (s[k + 1]) {
                    case 'M':
                        num += 900
                        k++
                        break
                    case 'D':
                        num += 400
                        k++
                        break
                    default:
                        num += 100
                        break
                }
                break
            case 'L':
                num += 50
                break
            case 'X':
                switch (s[k + 1]) {
                    case 'C':
                        num += 90
                        k++
                        break
                    case 'L':
                        num += 40
                        k++
                        break
                    default:
                        num += 10
                        break
                }
                break
            case 'V':
                num += 5
                break
            case 'I':
                switch (s[k + 1]) {
                    case 'X':
                        num += 9
                        k++
                        break
                    case 'V':
                        num += 4
                        k++
                        break
                    default:
                        num += 1
                        break
                }
                break
        }
    }

    return num
};
// @lc code=end
