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
    ListNode* reverseList(ListNode* head) {
        ListNode* curr = head;
        vector<int> arr;
        
        while(curr) {
            arr.push_back(curr -> val);
            curr = curr -> next;
        }
        
        curr = head;
        
        for(int i = arr.size() - 1; i >= 0; i--) {
            curr -> val = arr[i];
            curr = curr -> next;
        }
        
        return head;
    }
};

/*

Approach: 2 (Replace just value)
arr -> 1, 2, 3, 4, 5
while(curr) {
    arr.push_back(curr -> val);
    curr = curr -> next;
}
curr = head;
for(i = length - 1; i >= 0; i--) {
    curr -> val = arr[i];
    curr = curr -> next;
}

*/