/*
 * @lc app=leetcode id=838 lang=typescript
 *
 * [838] Push Dominoes
 */

// @lc code=start
function pushDominoes(dominoes: string): string {
    const length = dominoes.length
    const moves: number[] = Array(length).fill(0)

    for (let i = 0; i < length; i++) {
        if (dominoes[i] === 'R') {
            let strength = length
            moves[i] = strength--
            for (let j = i + 1; j < length; j++) {
                if (dominoes[j] !== '.') break
                moves[j] += strength--
            }
            continue
        }
        if (dominoes[i] === 'L') {
            let strength = length * -1
            moves[i] = strength++
            for (let j = i - 1; j >= 0; j--) {
                if (dominoes[j] !== '.') break
                moves[j] += strength++
            }
            continue
        }
    }
    
    let result: string = ''
    for (const move of moves) {
        result += move < 0 ?
            'L' : move > 0 ?
            'R' : '.'
    }

    return result
};
// @lc code=end
