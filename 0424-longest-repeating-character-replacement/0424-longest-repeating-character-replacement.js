/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const freqMap = new Map();
    let maxFreq = 0;
    let maxLength = 0;
    let start = 0;

    for (let i = 0; i < s.length; i++) {
        const currFreq = freqMap.get(s[i]) || 0;
        const currLength = i - start + 1;

        freqMap.set(s[i], currFreq + 1);
        maxFreq = Math.max(maxFreq, currFreq + 1);

        if (currLength - maxFreq > k) {
            freqMap.set(s[start], freqMap.get(s[start]) - 1);
            start++;
        } else {
            maxLength = Math.max(maxLength, currLength)
        }
    }

    return maxLength;
};