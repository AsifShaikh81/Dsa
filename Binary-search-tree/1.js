//  Validate Binary Search Treec

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
 * @return {boolean}
 */
var isValidBST = function(root,lo=null, hi=null) {
    //lo = lower limit
    //hi = high limit
    if(!root) return true
    
    if((lo !=null && root.val<=lo) || (hi !=null && root.val>=hi)){
         return false
    }
    let isleftBST = isValidBST(root.left , lo , root.val) // it will return true or false
    let isrightBST = isValidBST(root.right , root.val , hi) // it will return true or false

    return isleftBST && isrightBST // if both return true than its valid bst

    



};