/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const answer = [];

  candidates.sort((a, b) => a - b);

  const findSum = (index, currTarget, arr) => {
    if (currTarget === 0) {
      answer.push(arr.slice());
      return;
    }
    
    if (index >= candidates.length || currTarget < 0) return;

    arr.push(candidates[index]);

    findSum(index + 1, currTarget - candidates[index], arr);
    arr.pop();

    let nextIndex = index + 1;
    while (nextIndex < candidates.length && candidates[nextIndex] === candidates[index]) nextIndex++;
    findSum(nextIndex, currTarget, arr);
  }

  findSum(0, target, []);

  return answer;
};