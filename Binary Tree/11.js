//*1448. Count Good Nodes in Binary Tree - top down approach 
//*note: top down approach mein hum logic pehle likhte hai fir recursive call karte, bottom up mein recursive pehle fir logic
//* u can compare this problem and prev problem, lowest ancestor wala problem
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let ans = 0 // good node counter
    let traversal = (curr, maxSeenSoFar)=>{
    if(curr.val >= maxSeenSoFar){
        ++ans
    }
    let currMax = Math.max(maxSeenSoFar, curr.val) // this will update max seen so far
    curr.left && traversal(curr.left,currMax)
    curr.right && traversal(curr.right,currMax)

    }
    traversal(root, -Infinity) // we calling -Inf with root bcz at start
    return ans 
    
};


//*Populating Next Right Pointers in Each Node
/**
 *  Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
 if(!root) return root // corner case
 let traversal = (curr)=>{

if(curr.left){
curr.left.next = curr.right

}
if(curr.right && curr.next){
curr.right.next = curr.next.left

}

curr.left && traversal(curr.left)
curr.right && traversal(curr.right)
 }
 traversal(root)
 return root // after modify return root
    
};