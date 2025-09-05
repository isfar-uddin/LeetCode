/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let maxFreq = 0, longestChar = 0, start = 0, end = 0;
  const frequency = new Map();

  while (end < s.length) {
    const currFreq = frequency.get(s[end]) || 0;
    const currLength = end - start + 1;
    frequency.set(s[end], currFreq + 1);
    maxFreq = Math.max(maxFreq, currFreq + 1);

    if(currLength - maxFreq > k) {
      frequency.set(s[start], frequency.get(s[start]) - 1);
      start++;
    } else {
      longestChar = Math.max(longestChar, currLength);
    }

    end++;
  }

  return longestChar;
};