class Solution:
  def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
    size = len(candidates)
    answer = []
    
    def dfs(index: int, currTarget: int, path: List[int]) -> None:
      if currTarget == 0:
        answer.append(path.copy())
        return
      
      if index >= size or currTarget < 0:
        return
      
      path.append(candidates[index])
      dfs(index, currTarget - candidates[index], path)
      path.pop()
      nextIndex = index + 1
      while(nextIndex < size and candidates[index] == candidates[nextIndex]):
        nextIndex += 1
      dfs(nextIndex, currTarget, path)

      return
    
    dfs(0, target, [])

    return answer


