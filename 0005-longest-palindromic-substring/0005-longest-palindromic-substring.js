/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = "";
  let maxLen = 0;

  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      let currLen = right - left + 1;
      if (currLen > maxLen) {
        maxLen = currLen;
        ans = s.slice(left, left + maxLen);
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }

  return ans;
};