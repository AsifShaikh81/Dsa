//*https://leetcode.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // corner case - if head null(means no LL) return false
    if(head==null) return false 
   let slow = head // at start pointing to head 
   let fast = head.next // at start pointin  to head
   // loop ko jab tak run karo jab tak slow not equal to fast , if they equal(met at some point) loop will break and return true that means LL cycle exist
   while(slow!==fast){
    // if fast and fast.next is null return false that means its not LL cycle 
    if(fast===null || fast.next ===null) return false
     slow = slow.next // move 1 step ahead
     fast = fast.next.next  // move 2 step ahead

   }
   return true
 
    
};


//*https://leetcode.com/problems/palindrome-linked-list/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // find middle of LL
    let slow = head // at start pointing to head, this will be middle element later
    let fast = head // at start pointing to head
    // loop run until fast and fast.next becomes null
    while(fast && fast.next){
        slow= slow.next // 1 step ahead
        fast = fast.next.next // 2 step ahead
    }

    // reverse the second half
    let prev = null  // at start null
    let curr = slow // middle 
    // loop run unitl current exist, once curr null loop will break
    while(curr){
    let temp = curr.next // storing next node in temp
    curr.next = prev // pointin to prev
    prev = curr  // prev becomes curr
    curr= temp // curr become temp that is curr.next

    }


    // move start and enpoint and compare each other
    let firstliststart = head // at start point to head
    let secondlistlast = prev  // prev is last element
    // loop run until  secondlistlast exist, once  secondlistlast becomes null loop break 
    while( secondlistlast){
        // compare two list vlaues if not equal return false means its not palindrome
        if(firstliststart.val !==  secondlistlast.val){
            return false

        }
        firstliststart =firstliststart.next // 1 step ahed
        secondlistlast =  secondlistlast.next  // 1 step ahead

    }
    return true // return true if there is palindrome

};