/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parentheses = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      parentheses.push(')');
    } else if(s[i] === '{') {
      parentheses.push('}');
    } else if(s[i] === '[') {
      parentheses.push(']');
    } else {
      const parenthesis = parentheses.pop();
      if(parenthesis !== s[i]) return false;
    }
  }

  return parentheses.length === 0;
};