/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let ans = [];

  const dfs = (arr, index, currTarget) => {
    if (currTarget === 0) {
      console.log(arr);
      ans.push(arr);
      return;
    }

    if (index >= candidates.length || currTarget < 0) {
      return;
    }

    arr.push(candidates[index]);
    dfs([...arr], index, currTarget - candidates[index]);
    arr.pop();
    dfs([...arr], index + 1, currTarget);
  }

  dfs([], 0, target);
  return ans;
};