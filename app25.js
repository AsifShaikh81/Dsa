// 83. Remove Duplicates from Sorted List
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
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
var deleteDuplicates = function(head) {
   let curr = head
   
 while(curr && curr.next){
      
    if(curr.val === curr.next.val){
         curr.next = curr.next.next
          
    }else{
    curr = curr.next
    }
   
   }
    return head
};

// https://leetcode.com/problems/odd-even-linked-list/
// 328. Odd Even Linked List

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
var oddEvenList = function(head) {
    
    if(!head || !head.next) return head// corner case
    let odd = head // odd starts from head(1st node) ,bcz 1st node is odd 
    let even = head.next // even starts from head.next(2nd node), bcz 2nd node is even
    let evenStart = even // storing start even pos later we have to connect to odd to arange list
    while (odd.next && even.next){
       odd.next = odd.next.next // pointing odd node to odd node
        even.next = even.next.next // ponting even node to even node
         odd = odd.next // moving add node
        even =  even.next // moving even node
        
    }
      odd.next = evenStart // pointin odd to even 
    return head
};