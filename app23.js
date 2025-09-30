//*160. Intersection of Two Linked Lists
//*https://leetcode.com/problems/intersection-of-two-linked-lists/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //put headB in set 
    let hashMap = new Set() // create new set 
    while(headB){ // lopp will run until headB exist or not null
    hashMap.add(headB) // add headB in set
    headB = headB.next // move ahead
    }
    // compare headA and headB
    // loop will run until headA exist or not null
    while(headA){
        // checkin/comparing  does set has headA elemenet, if yes return that node
        if(hashMap.has(headA)){
            return headA
        }
        headA = headA.next // move ahead
        
    }
    return null
};