
//*Path sum - top down
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    let ans = false
let traverse = (curr, currSum)=>{
 // if its a leaf node, leaf node - > no child 
 let newSum = currSum + curr.val 
if(!curr.left && !curr.right){
    if(newSum === targetSum){
    ans = ans || true
    }
}
curr.left && traverse(curr.left, newSum)
curr.right && traverse(curr.right, newSum)
}
traverse(root,0)
return ans


};
//*Path sum - bottom up

var hasPathSum = function(root, targetSum) {
    if(!root) return false
    if(!root.left && !root.right){
        return root.val === targetSum
    }
    let leftnode = hasPathSum(root.left, targetSum - root.val)
    let rightnode = hasPathSum(root.right, targetSum - root.val)

    return leftnode || rightnode
    
};

fix