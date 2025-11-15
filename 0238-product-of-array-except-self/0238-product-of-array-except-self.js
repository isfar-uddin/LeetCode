/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let curr = 1;
  const ans = [];
  ans.push(curr);

  for (let i = 1; i < nums.length; i++) {
    ans.push(ans[i - 1] * nums[i - 1]);
  }
  console.log(ans)

  curr = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    curr = curr * nums[i + 1];
    ans[i] = curr * ans[i];
  }

  return ans;
};