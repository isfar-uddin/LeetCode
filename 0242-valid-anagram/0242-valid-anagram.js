/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
      return false;
    }

    const countMap = new Map();

    for(let i = 0; i < s.length; i++) {
      if(!countMap.has(s[i])) {
        countMap.set(s[i], -1);
      } else {
        countMap.set(s[i], countMap.get(s[i]) - 1);
      }
      if(!countMap.has(t[i])) {
        countMap.set(t[i], 1);
      } else {
        countMap.set(t[i], countMap.get(t[i]) + 1);
      }
    }

    for(let value of countMap.values()) {
      if(value != 0) {
        return false;
      }
    }

    return true;
};

/* 
Approach #1 ->
- check each element of s into t
- if found replace the character with #
TC -> O(m*n)
SC -> O(1)

Approach #2 if Unicode characters ->
- store count on the map
- increment count for char of s and decrement count for char of t
- iterate through the map if count is not equal to 0 return false
- return true

TC -> O(n)
SC -> O(n)
 */