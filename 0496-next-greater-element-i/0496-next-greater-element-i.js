/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const hashMap = new Map();

    nums2.forEach(num => {

      while(stack.length > 0 && num > stack[stack.length - 1]) {
        const smallerNumber = stack.pop();
        hashMap.set(smallerNumber, num);
      }

      stack.push(num);
    })

    while(stack.length > 0) {
      hashMap.set(stack.pop(), - 1);
    }

    const result = [];
    nums1.forEach(num => {
      result.push(hashMap.get(num));
    })

    return result;
};