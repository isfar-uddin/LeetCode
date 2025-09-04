/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxContent = 0;

  while(i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    maxContent = Math.max(maxContent, area);

    if(height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }

  return maxContent;
};