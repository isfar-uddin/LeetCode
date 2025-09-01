/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numSet = new Set();

  for(let i = 0; i < nums.length; i++) {
    if(numSet.has(nums[i])) {
      return true;
    }

    numSet.add(nums[i])
  }

  return false;
};

/* 

for( i = 0 -> n - 1)
  for(j = i+ 1 -> n)
    if(nums[i] == nums[j]) return true;
return false

TC -> O(n^2)
SC -> O(1)

map/set -> 
for(i = 0 -> n - 1)
  if(map[nums[i]]) return true;
return false;

TC -> O(n)
SC -> O(n)
 */