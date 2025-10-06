/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
if(!head || !head.next) return head // base case ,if head is null at that point start returning
 let L = head // left point to head
 let R = head.next //right point to head next node

 L.next = swapPairs(R.next) // calling (recursion) 
 R.next = L // right point to left 
 return R // return the swapeed node
    
};