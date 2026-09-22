/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const length = s.length;
    let start = 0;
    let maxLen = 1;
    const dp = Array.from({ length }, () => new Array(length).fill(false));

    for (let i = 0; i < length; i++) {
        dp[i][i] = true;
    }

    for (let i = 0; i < length - 1; i++) {
        if (s[i] == s[i + 1]) {
            dp[i][i + 1] = true;
            maxLen = 2;
            start = i;
        }
    }

    for (let len = 3; len <= length; len++) {
        for (let i = 0; i <= length - len; i++) {
            let j = len + i - 1;
            if (s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;

                if (len > maxLen) {
                    start = i;
                    maxLen = len;
                }
            }
        }
    }

    return s.substr(start, maxLen);
};