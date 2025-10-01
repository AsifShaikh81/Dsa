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

// 
//*19. Remove Nth Node From End of List
//*1st approach : two pass approach - traversing LL two times
//*Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function(head, n) {
    let sentinel =  new ListNode()// sen points to head
    sentinel.next =  head

    // calculate LL length
    let length = 0 // at start len is zero 
    while(head){
        head = head.next // keep moving head
        length++ // inc length to cal LL length
    }

    // cal prev position to delete
    let prevPos =  length - n

    // now reach prev pos to delete node
    let prev = sentinel
    // loop 'prevPos' tak run hoga ,once it reached to 'prevPos' it will break
    for (let i =0 ; i<prevPos; i++){
        prev = prev.next // movin prev ahead
    }              
    prev.next = prev.next.next // deleting the node

    return sentinel.next  // returning the head      
    
};


//*19. Remove Nth Node From End of List
//* Given the head of a linked list, remove the nth node from the end of the list and return its head.
//*2nd approach : one pass approach - 1 time traversing LL
//*https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
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

// this is called two pass approach , kyu ki traversing LL two times 

var removeNthFromEnd = function(head, n) {
    let sentinel =  new ListNode() // created sen node
    sentinel.next =  head // sen points to head
        
    let first = sentinel // at start first points to sentinel 
    // n= 2 ,so loop 2 times run hoga and first pointer move to right place
    for(let i=0; i<n;i++){
        first = first.next // move first ahead
    }
    let second = sentinel // at start second points to seninel
    // loop will run till first.next exist 
    while(first.next){
         second = second.next // move ahead , secons is prev pos, used to delete node
         first = first.next  // move ahead
    

    }   
    second.next = second.next.next // now second has reached its right pos to delete node, node deleted
    return sentinel.next //retruning head
    
};

