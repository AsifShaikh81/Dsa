

//*Maximum Depth of Binary Tree
//*top down approach
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
var maxDepth = function(root) {
    //top down approach
    if(!root) return 0
    let maxdepth = 0 // to track maxdepth
  let traversal = (curr,depth)=>{
        maxdepth = Math.max(maxdepth,depth) // compare max between maxdepth & depth 
        curr.left && traversal(curr.left, depth+1) // call traversal & inc depth by 1
        curr.right && traversal(curr.right, depth+1)
    }
    traversal(root,1)
    return maxdepth // return maxdepth
    
};

//* bottom up approach 

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
var maxDepth = function(root) {
    if(!root) return 0
    let leftnode = maxDepth(root.left)
    let rightnode = maxDepth(root.right)

    return 1 + Math.max(leftnode,rightnode)
};