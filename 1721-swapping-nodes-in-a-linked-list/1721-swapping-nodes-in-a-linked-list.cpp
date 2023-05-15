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
    ListNode* swapNodes(ListNode* head, int k) {
        int length = 0;
        ListNode* curr = head, *firstNode, *secondNode;
        while(curr) {
            length++;
            if(length == k) {
                firstNode = curr;
            }
            curr = curr -> next;
        }
        int count = 0;
        curr = head;
        
        while(curr) {
            count++;
            
            if(count == length - k + 1) {
                secondNode = curr;
                break;
            }
            
            curr = curr -> next;
        }
        swap(firstNode -> val, secondNode -> val);
        return head;
    }
};