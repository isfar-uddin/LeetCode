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
    int widthOfBinaryTree(TreeNode* root) {
        queue<pair<TreeNode*, long long>> q;
        int maxWidth = 0;
        q.push(make_pair(root, 0));
        while(!q.empty()) {
            int size = q.size();
            int start = q.front().second;
            int end = q.back().second;
            maxWidth = max(maxWidth, end - start + 1);
            for(int i = 0; i < size; i++) {
                auto cur = q.front();
                q.pop();
                int idx = cur.second - start;
                if(cur.first->left) q.push(make_pair(cur.first->left, (long long)idx * 2));
                if(cur.first->right) q.push(make_pair(cur.first->right, (long long)idx * 2 + 1));
            }
        }
        return maxWidth;
    }
};