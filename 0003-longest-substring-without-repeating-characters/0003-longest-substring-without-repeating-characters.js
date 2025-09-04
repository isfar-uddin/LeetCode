/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if(s.length == 0) return 0;
  
  let map = new Map();
  let i = 1;
  let maxLength = 1;
  let start = 0;
  map.set(s[0], 0);

  while (i < s.length) {
    if (!map.has(s[i])) {
      maxLength = Math.max(maxLength, i - start + 1);
    } else if (start > map.get(s[i])) {
      maxLength = Math.max(maxLength, i - start + 1);
    } else {
      start = map.get(s[i]) + 1;
    }
    map.set(s[i], i);
    i++;
  }

  return maxLength;
};