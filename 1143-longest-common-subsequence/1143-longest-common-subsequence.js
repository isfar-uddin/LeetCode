/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const length1 = text1.length;
    const length2 = text2.length;
    const dp = Array.from({ length: length1 }, () => []);

    const findSubsequence = (index1, index2) => {
        if (index1 >= length1 || index2 >= length2) {
            return 0;
        }

        if (dp[index1][index2] !== undefined) return dp[index1][index2];

        if (text1[index1] == text2[index2]) {
            return dp[index1][index2] = 1 + findSubsequence(index1 + 1, index2 + 1);
        } else {
            return dp[index1][index2] = Math.max(findSubsequence(index1 + 1, index2), findSubsequence(index1, index2 + 1))
        }
    }

    return findSubsequence(0, 0);
};