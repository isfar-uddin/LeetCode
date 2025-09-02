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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const set = new Set();

  // BFS implementation
  /* 
    const queue = [];
    queue.push(root);
  
    while (queue.length) {
      let length = queue.length;
  
      while (length--) {
        const node = queue.shift();
  
        if (set.has(node.val)) return true;
  
        set.add(k - node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  
    return false;
   */
  // DFS approach
  const bst = node => {
    if (!node) return false;
    if (set.has(node.val)) return true;
    set.add(k - node.val);
    return bst(node.left) || bst(node.right);
  }

  return bst(root);
};