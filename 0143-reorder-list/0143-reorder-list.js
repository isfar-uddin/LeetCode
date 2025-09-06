/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  /* 
    1. Reverse the last half
    2. Then marge the last half to first half
   */

  let slow = head, fast = head?.next, prev = null;;

  // Move to the pointer to the half of the list
  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // Reverse the last half
  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  slow = head;
  fast = prev;

  // merge two list
  while (slow && fast) {
    let temp = slow.next;
    slow.next = fast;
    slow = fast;
    fast = fast.next;
    slow.next = temp;
    slow = temp;
  }

  return head;
};