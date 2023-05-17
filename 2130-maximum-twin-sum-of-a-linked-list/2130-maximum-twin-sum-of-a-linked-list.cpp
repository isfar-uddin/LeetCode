/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    int pairSum(ListNode* head) {
        int maxSum = 0;
        vector<int> v;
        ListNode* node = head;
        
        while(node) {
            v.push_back(node -> val);
            node = node -> next;
        }
        
        int i = 0, j = v.size() - 1;
        
        while(i < j) {
            maxSum = max(maxSum, v[i] + v[j]);
            i++;
            j--;
        }
        
        return maxSum;
    }
};