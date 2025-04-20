/*
 * @lc app=leetcode id=781 lang=typescript
 *
 * [781] Rabbits in Forest
 */

// @lc code=start
function numRabbits(answers: number[]): number {
    const map = new Map<number, number>()
    let result: number = 0
    
    for (const answer of answers) {
        const count = map.get(answer) || 0
        map.set(answer, count + 1)
    }

    for (const [value, count] of map) {
        const rabitsPerGroup = value + 1
        const numberOfColors = Math.ceil(count / rabitsPerGroup)
        result += rabitsPerGroup * numberOfColors
    }

    return result
}
// @lc code=end
