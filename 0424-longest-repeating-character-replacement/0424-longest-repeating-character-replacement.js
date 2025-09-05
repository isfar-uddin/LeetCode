/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const frequency = new Map();
  let start = 0, end = 0, longestString = 0, maxFreq = 0;

  while (end < s.length) {
    const currFreq = (frequency.get(s[end]) || 0) + 1
    const currLength = end - start + 1;
    frequency.set(s[end], currFreq);
    maxFreq = Math.max(maxFreq, currFreq);

    if (currLength - maxFreq > k) {
      frequency.set(s[start], frequency.get(s[start]) - 1);
      start++;
    } else {
      longestString = Math.max(longestString, currLength)
    }
    end++;
  }

  return longestString;
};