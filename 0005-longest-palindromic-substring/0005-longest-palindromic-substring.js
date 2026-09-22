/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLen = 1;
    let start = 0;
    const n = s.length;

    const expand = (left, right) => {
        while(left >= 0 && right < n && s[left] == s[right]) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for(let i = 0; i < n; i++) {
        const oddLen = expand(i, i);
        const evenLen = expand(i, i + 1);
        const bestLen = Math.max(oddLen, evenLen);

        if(bestLen > maxLen) {
            maxLen = bestLen;
            start = i - Math.floor(bestLen)/2 + 1;
        }
    }

    return s.substr(start, maxLen);
};