class Solution:
  def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
    answer = []
      
    def findSum(index, arr, currTarget):
      if currTarget == 0:
        answer.append(list(arr))
        return

      if index >= len(candidates) or currTarget < 0:
            return

      arr.append(candidates[index])

      findSum(index + 1, arr, currTarget - candidates[index])
      arr.pop()
      nextIndex = index + 1
      while(nextIndex < len(candidates) and candidates[nextIndex] == candidates[index]):
        nextIndex += 1
      findSum(nextIndex, arr, currTarget)

    candidates.sort()
    findSum(0, [], target)
    return answer