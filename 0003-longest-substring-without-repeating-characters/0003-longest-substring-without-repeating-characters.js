/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const map = new Map();
    let startPosition = 0;
    let currLength = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= startPosition) {
            startPosition = map.get(s[i]) + 1;
        }
        currLength = i - startPosition + 1;
        maxLength = Math.max(currLength, maxLength);
        map.set(s[i], i);
    }

    return maxLength;
};