/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlphaNumeric = char => /^[a-zA-Z0-9]$/.test(char);

    let i = 0;
    let j = s.length - 1;

    while(i < j) {
      if(!isAlphaNumeric(s[i])) {
        i++;
      } else if(!isAlphaNumeric(s[j])) {
        j--;
      } else if(s[i].toLowerCase() === s[j].toLowerCase()) {
        i++;
        j--;
      } else {
        return false;
      }
    }

    return true;
};