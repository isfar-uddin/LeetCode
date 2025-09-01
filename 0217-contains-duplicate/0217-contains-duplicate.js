/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hashMap = new Map();

  for(let i = 0; i < nums.length; i++) {
    if(hashMap.has(nums[i])) {
      return true;
    }

    hashMap.set(nums[i], true)
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

map -> 
for(i = 0 -> n - 1)
  if(map[nums[i]]) return true;
return false;

TC -> O(n)
SC -> O(n)
 */