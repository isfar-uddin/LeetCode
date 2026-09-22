/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length;
    let start = 0;
    let end = n - 1;
    
    while(start <= end) {
        if(nums[start] == target) return start;
        if(nums[end] == target) return end;

        const mid = Math.floor((start + end) / 2);

        if(nums[mid] == target) {
            return mid;
        } else if(nums[start] <= nums[mid]) {
            if(target < nums[mid] && target > nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if(target > nums[mid] && target < nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
};