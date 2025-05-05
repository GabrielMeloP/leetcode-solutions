/*
 * @lc app=leetcode id=3417 lang=typescript
 *
 * [3417] Zigzag Grid Traversal With Skip
 */

// @lc code=start
function zigzagTraversal(grid: number[][]): number[] {
    const lengthY = grid.length
    const lengthX = grid[0].length
    const result: number[] = []

    for (let y = 0; y < lengthY; y++) {
        if (y % 2 === 0) { // Even
            for (let x = 0; x < lengthX; x += 2) {
                result.push(grid[y][x])
            }
        }
        else { // Odd
            const start = lengthX % 2 === 0 ? lengthX - 1 : lengthX - 2
            for (let x = start; x > 0; x -= 2) {
                result.push(grid[y][x])
            }
        }
    }

    return result
};
// @lc code=end
