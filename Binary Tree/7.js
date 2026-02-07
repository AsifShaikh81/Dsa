
//*Invert Binary Tree

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root

    let temp = root.left
    root.left = root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
};

//* same tree
var isSameTree = function(p, q) {
    // dono node nahi hai 
    if(!p && !q) return true
    // one of the node is missing 
    if(!p || !q) return false
 // value should be same
  return p.val == q.val  &&
        isSameTree(p.left,q.left) &&
        isSameTree(p.right,q.right)


};