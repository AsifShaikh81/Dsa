//*Preorder Traversal - Iterative Approach

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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return []// if no root return empty stack/array, corener case
    let ans =[] // to store ans
    let stack = [root] // initially stack have root node 
    // loop will jab tak stack.length exist
    while(stack.length){
        let curr = stack.pop() // curr stores element poped out from stack 
        ans.push(curr.val) // push curr.val in ans
        curr.right &&stack.push(curr.right) // push right elem to stack only if curr.right exist
        curr.left &&stack.push(curr.left) // push left element to stack  only if curr.left exist


    }
    return ans
    
};