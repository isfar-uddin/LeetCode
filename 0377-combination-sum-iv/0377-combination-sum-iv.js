/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const memo = new Map();

  const dfs = (currSum) => {
    if (memo.has(currSum)) return memo.get(currSum);
    if (currSum == 0) return 1;
    if (currSum < 0) return 0;

    let count = 0;

    nums.forEach(num => {
      count += dfs(currSum - num);
    })
    
    memo.set(currSum, count);

    return count;
  }

  return dfs(target);
};