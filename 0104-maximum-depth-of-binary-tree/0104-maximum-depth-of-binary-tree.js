/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const dfs = (root, level) => {
    if (!root) return level;

    return Math.max(dfs(root.left, level + 1), dfs(root.right, level + 1));
  }

  return dfs(root, 0);
};