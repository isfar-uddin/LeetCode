/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let root = new ListNode();
  root.next = head;
  let curr = head, prev = root;

  for(let i = 0; i < n; i++) {
    curr = curr.next;
  }

  while(curr) {
    curr = curr.next;
    prev = prev.next;
  }

  prev.next = prev.next?.next;

  return root.next;
};