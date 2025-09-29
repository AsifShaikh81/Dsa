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
var middleNode = function(head) {
    // both slow and fast pointer pointing to head 
    let slow = head
    let fast = head
    // jab tak mera fast and fast.next null na ho tab tak loop chalega 
    while(fast!==null && fast.next!==null){
        slow = slow.next // 1 step ahead
        fast = fast.next.next // 2 step ahead
    // once it reach null while loop will exit and return middle node
    }
    
    return slow// returing middle node
};