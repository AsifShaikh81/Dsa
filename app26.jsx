// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // loop will run until my l1 or l2 or carry exist 
    let ans = new ListNode() // dummy node to refrence the output node
    let ansHead = ans // storin this node bcz at the end we have to return ans.next node
     let carry = 0 // ini carr with zero
    while(l1 ||l2 ||carry ){
        let sum =(!l1? 0: l1.val) +(!l2? 0: l2.val) + carry // adding l1 l2 and carry, if l1 not exist add zero otherwise add whatever thr value in l2, some goes for l2
        carry = Math.floor(sum /10) // if 12 i will get 1 as a carry 
        let output = sum % 10 // if 12 i will get 2 as a output 

        let newNode = new ListNode(output) // jo output aya uska naya node bana diya 
        ans.next = newNode // attaching the output to ans

        l1 = l1 && l1.next
        l2 = l2 && l2.next
        ans = ans.next



    }
    return ansHead.next
    
};

// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/submissions/1790445984/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummystartnode =  new ListNode() // dummy node to point curr 
     let curr = dummystartnode // at start curr pointing to dummy node
    
    // loop run until l1 and l2 exist
    while(l1 && l2){
        // if l1 is less than l2 move curr.next to l1 and move l1 1 step ahead, else move curr.next to l2 and move l2 1 step ahead
        if(l1.val < l2.val){
            curr.next = l1
            l1 = l1.next
            
        }else {
            curr.next =  l2
            l2 = l2.next
        }
        curr = curr.next 
    }
    // agar l1 loop khatam hogaya ya null hogaya toh l1 ka last noode point karega l2 ko
    if(!l1){
        curr.next = l2
    // else if l2 loop khatam hogaya ya null hogaya toh l2 ka last noode point karega l1 ko 
    }else if(!l2){
        curr.next = l1
    }
   return dummystartnode.next  // after merging two sorted LL returning 1 sorter LL
};