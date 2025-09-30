// https://leetcode.com/pfroblems/linked-list-cycle/
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
    let seenNode = new Set() // creating new set(hash map/tabel)
    let curr = head // at start curr pointing to head
    // loop will run until curr is not equal to null, once it null it will break
    while(curr !==null){
        // checking kya curr node already exit hai set(haspmap/tabel) mein ,if yes return true 
        if(seenNode.has(curr)){
            return true
        }
        seenNode.add(curr) // adding current node in set(hasp map/tabel)
        curr= curr.next // movvin my current node to next node
    }

    return false // while loop break hoga toh false return karega mltb there is no linked list cycle
    
};