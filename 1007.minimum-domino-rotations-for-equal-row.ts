/*
 * @lc app=leetcode id=1007 lang=typescript
 *
 * [1007] Minimum Domino Rotations For Equal Row
 */

// @lc code=start
function minDominoRotations(tops: number[], bottoms: number[]): number {
    const length = tops.length
    const counts: number[] = Array(7).fill(0)
    // Position 0 is not used

    for (let i = 0; i < length; i++) {
        if (tops[i] === bottoms[i]) counts[tops[i]]++
        else counts[tops[i]]++, counts[bottoms[i]]++
    }

    let mainNum: number = 0
    for (let i = 1; i < 7; i++) {
        if (counts[i] === length) mainNum = i
    }
    if (mainNum === 0) return -1

    let missingTops: number = 0
    let missingBottoms: number = 0
    for (let i = 0; i < length; i++) {
        if (tops[i] !== mainNum && bottoms[i] !== mainNum) return -1
        if (tops[i] !== mainNum) missingTops++
        if (bottoms[i] !== mainNum) missingBottoms++
    }

    return Math.min(missingTops, missingBottoms)
};
// @lc code=end
