/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
    const convert = (symbol: string, value: number): string => {
        if (num < value) return ''
        const newNum = num % value
        let roman = ''

        while (num > newNum) {
            roman += symbol
            num -= value
        }

        return roman
    }

    return convert('M', 1000)
        + convert('CM', 900)
        + convert('D', 500)
        + convert('CD', 400)
        + convert('C', 100)
        + convert('XC', 90)
        + convert('L', 50)
        + convert('XL', 40)
        + convert('X', 10)
        + convert('IX', 9)
        + convert('V', 5)
        + convert('IV', 4)
        + convert('I', 1)
};
// @lc code=end
