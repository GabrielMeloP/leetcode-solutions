/*
 * @lc app=leetcode id=3222 lang=typescript
 *
 * [3222] Find the Winning Player in Coin Game
 */

// @lc code=start
function winningPlayer(x: number, y: number): string {
    const turns = Math.min(x, Math.floor(y / 4))
    return turns % 2 === 0 ? 'Bob' : 'Alice'
};
// @lc code=end
