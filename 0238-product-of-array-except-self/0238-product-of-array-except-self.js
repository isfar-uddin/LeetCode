/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let ans = [];
    let curr = 1;

    ans[nums.length - 1] = 1;
    for(let i = nums.length - 2; i >= 0; i--) {
      ans[i] = ans[i + 1] * nums[i + 1]; 
    }

    for(let i = 0; i < nums.length; i++) {
      ans[i] *= curr;
      curr *= nums[i]
    }

    return ans;
};