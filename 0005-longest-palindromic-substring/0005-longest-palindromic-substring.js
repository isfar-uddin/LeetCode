/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = "";
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] == s[right]) {
      let currLen = right - left + 1;
      if (currLen > maxLen) {
        maxLen = currLen;
        ans = s.slice(left, left + maxLen);
      }
      left--;
      right++;
    }

    left = i, right = i + 1;

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

  return ans;
};