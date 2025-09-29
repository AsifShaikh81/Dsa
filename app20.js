// 206. Reverse Linked List

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
var reverseList = function(head) {
    let prev = null // at start prev points to null
    let curr  =head // at start curr point to head
    // loop will run until my curr becomes null, once my curr is null it will exit loop
    while(curr!==null){
        let temp = curr.next // storing curr.next in temp 
        curr.next = prev // curr.next will point to prev
        prev = curr // move prev to curr
        curr = temp  // curr becomes temp that is curr.next

    }
    return prev // after the loop ends prev become last node 
};