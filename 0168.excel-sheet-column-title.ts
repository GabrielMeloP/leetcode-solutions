/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    let base26 = columnNumber.toString(26)
    const conversion = {
        '1': 'A',
        '2': 'B',
        '3': 'C',
        '4': 'D',
        '5': 'E',
        '6': 'F',
        '7': 'G',
        '8': 'H',
        '9': 'I',
        'a': 'J',
        'b': 'K',
        'c': 'L',
        'd': 'M',
        'e': 'N',
        'f': 'O',
        'g': 'P',
        'h': 'Q',
        'i': 'R',
        'j': 'S',
        'k': 'T',
        'l': 'U',
        'm': 'V',
        'n': 'W',
        'o': 'X',
        'p': 'Y',
        '0': 'Z',
    }

    let result = ''
    let positionZero = base26.lastIndexOf('0')
    
    while (positionZero >= 0) {
        const newLeadingValue = parseInt(base26.slice(0, positionZero), 26) - 1
        base26 = (newLeadingValue > 0 ? newLeadingValue.toString(26) : '')
            + 'Z' + base26.slice(positionZero + 1)
        positionZero = base26.lastIndexOf('0')
    }
    
    for (let i = base26.length - 1; i >= 0; i--) {
        if (base26[i] === 'Z') {
            result = 'Z' + result
            continue
        }
        result = conversion[base26[i]] + result
    }

    return result
};
// @lc code=end
