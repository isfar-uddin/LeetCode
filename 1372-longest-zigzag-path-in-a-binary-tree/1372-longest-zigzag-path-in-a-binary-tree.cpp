/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int pathLength = 0;
    int longestZigZag(TreeNode* root) {
        dfs(root -> left, true, 1);
        dfs(root -> right, false, 1);
        return pathLength;
    }

    void dfs(TreeNode* root, bool goRight, int count) {
        if(!root) return;
        pathLength = max(pathLength, count);
        if(goRight) {
            dfs(root -> right, false, count + 1);
            dfs(root -> left, true, 1);
        } else {
            dfs(root -> left, true, count + 1);
            dfs(root -> right, false, 1);
        }
    }
};