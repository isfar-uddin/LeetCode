/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const strsMap = new Map();
  const ans = [];

  for (let i = 0; i < strs.length; i++) {
    const sortedKey = strs[i].split('').sort().join('');
    const group = strsMap.get(sortedKey) ?? [];
    group.push(strs[i]);
    strsMap.set(sortedKey, group);

  }

  for (const values of strsMap.values()) {
    ans.push(values);
  }

  return ans;
};