/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = Number.NEGATIVE_INFINITY;
    let prevMax = 1;
    let prevMin = 1;

    for(let i = 0; i < nums.length; i++) {
        const currMax = Math.max(nums[i], prevMax * nums[i], prevMin * nums[i]);
        const currMin = Math.min(nums[i], prevMax * nums[i], prevMin * nums[i]);
        prevMax = currMax;
        prevMin = currMin;

        result = Math.max(result, currMax)
    }

    return result;
};