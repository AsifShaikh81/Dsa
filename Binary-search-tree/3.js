//*Kth Smallest Element in a BST

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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let ans = null
  let counter = k // to track how many element visited
  let traversal = (curr)=>{
    if(ans != null) return // jaise hi answer mila recur further call nahi karega
    curr.left && traversal(curr.left)
    --counter // har bar counter dec hoga
    // agar counter zero mtlb element mil gaya 
    if(counter == 0){
        ans = curr.val
    }
    console.log(curr.val , counter)
    curr.right && traversal(curr.right)
}
    traversal(root)
    return ans
};

//*Lowest Common Ancestor of a Binary Search Tree
//* bottom -up
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if(p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left ,p,q)
  } else if(p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right ,p,q)
  }else {
    return root
  }
};