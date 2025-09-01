/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length) {
      return false;
    }

    const arr = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);

    for(let i = 0; i < s.length; i++) {
      console.log(s.charCodeAt(i) - base)
      arr[s.charCodeAt(i) - base]++;
      arr[t.charCodeAt(i) - base]--;
    }

    return arr.every(count => count === 0);
};

/* 
Approach #1 ->
- check each element of s into t
- if found replace the character with #
TC -> O(m*n)
SC -> O(1)

Approach #2 if Not unicode characters ->
- store count on the arr size of 26
- index should be 0 for a to 26 for z
- increment count for char of s and decrement count for char of t
- iterate through the arr if count is not equal to 0 return false
- return true

TC -> O(n)
SC -> O(1)


Approach #3 if Unicode characters ->
- store count on the map
- increment count for char of s and decrement count for char of t
- iterate through the map if count is not equal to 0 return false
- return true

TC -> O(n)
SC -> O(n)
 */