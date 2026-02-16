//*Binary Tree Maximum Path Sum
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
var maxPathSum = function(root) {
    let maxPathSum = -Infinity
    let traversal = (curr)=>{
        if(!curr) return 0
        // to ignore negative num we comparing node with 0
     let Left = Math.max(0, traversal(curr.left)) 
     let Right = Math.max(0, traversal(curr.right)) 

     let currSum  = curr.val + Left + Right
     
     maxPathSum = Math.max(currSum , maxPathSum)

     return curr.val + Math.max(Left ,Right)


    }
    traversal(root)
    return maxPathSum 

};