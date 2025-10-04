// 61. Rotate List
// https://leetcode.com/problems/rotate-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head //   if no list or 1 list return head
   // cal lengh of ll 
   let length = 0 
   let curr = head // points to head
   while(curr){
    curr = curr.next // move ahead 
    length++ // inc lenght 
   }
   // to avoid unessary rotation
   k = k%length


    let  slow = head // slow point to head
    let fast = head // at start point to heas

    // move fast kth step ahead from head
    for (let i = 0; i < k ; i++){
        fast =  fast.next
    }
    // loop run till fast exist
    while(fast.next){
        slow = slow.next
        fast = fast.next

    }

    fast.next =  head // point fast.next to head
     let newHead = slow.next // slow.next becomes new head
     slow.next = null // slow.next become null

     return newHead
    
};


// 24. Swap Nodes in Pairs
//https://leetcode.com/problems/swap-nodes-in-pairs/description/

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
    if(!head || !head.next) return head
    let dummy = new ListNode() // creating dummy node, this will becom prev later
    dummy.next = head // dummy point to head
   // previous =p , current = c , next = n
    let p = dummy //prev become dummu
    let c = head // curr point to head
    let n = head.next // next points to 3rd node that is next to head
     
    // if curr and next not exist loop will not run , there should be present curr and next to swap 
    while(c && n){
       p.next = n  // prev point to next
       c.next = n.next // c.next point to n.next
       n.next = c // n.next becomes curr ,swapping
    
      //moving pointer after swapping
       p =c // prev become curr
       c = p.next // curr becomes p.next
       n =c && c.next // n becomes n.next and n will only move if c exist

    }
    return dummy.next // returning new LL
    
};