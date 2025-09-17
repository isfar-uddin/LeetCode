'''
 nums = [3, 5, 2, 10, 7, 4, 20, 15, 12] target = 19
 nums = [2,7,11,15], target = 9
 nums = [3,3], target = 6
 nums = [3,2,4], target = 6
'''

'''
2 6
0 1
0 1
1 2
'''
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums) - 1):
          for j in range(i + 1, len(nums)):
            sum = nums[i] + nums[j]
            if sum == target:
              return [i, j]