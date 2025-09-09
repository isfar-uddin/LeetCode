/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const length1 = text1.length, length2 = text2.length;
  const dp = Array.from({ length: length1 }, () => []);

  const findCommonSequence = (index1, index2) => {
    if (index1 >= length1 || index2 >= length2) return 0;
    if (dp[index1][index2] !== undefined) return dp[index1][index2];

    if (text1[index1] === text2[index2]) {
      return dp[index1][index2] = 1 + findCommonSequence(index1 + 1, index2 + 1)
    } else {
      return dp[index1][index2] = Math.max(findCommonSequence(index1 + 1, index2), findCommonSequence(index1, index2 + 1));
    }
  }

  return findCommonSequence(0, 0);
};