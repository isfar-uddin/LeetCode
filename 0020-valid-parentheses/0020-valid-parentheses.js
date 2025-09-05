/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parentheses = [];
  const map = { '(': ')', '{': '}', '[': ']' };

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      parentheses.push(map[s[i]]);
    } else {
      const parenthesis = parentheses.pop();
      if (parenthesis !== s[i]) return false;
    }
  }

  return parentheses.length === 0;
};