/*
 * @lc app=leetcode id=1603 lang=typescript
 *
 * [1603] Design Parking System
 */

// @lc code=start
class ParkingSystem {
    available: number[] = Array(4).fill(0)

    constructor(big: number, medium: number, small: number) {
        this.available = [0, big, medium, small]
    }

    addCar(carType: number): boolean {
        if (this.available[carType] === 0) return false
        this.available[carType]--
        return true
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
// @lc code=end
