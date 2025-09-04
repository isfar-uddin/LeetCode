/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const ans = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;

        while (nums[j - 1] === nums[j] && j < k) {
          j++;
        }
      } else if (sum < 0) {
        j++;
      } else {
        k--;
      }
    }

    while(i < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }
  }

  return ans;
};