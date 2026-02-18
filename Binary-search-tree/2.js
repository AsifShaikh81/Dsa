//*Search in a BST - top down
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let ans  = null
    if(root.val == val){
       ans = root
    }
    else if(root.val < val){
       return root.right && searchBST(root.right,val)
    }else {
       return root.left && searchBST(root.left,val)
    }
    return ans
};

//*bottom-up
var searchBST = function(root, val) {
    
    if(!root) return root

    if(root.val === val) return root

    return root.val < val ? searchBST(root.right,val) : searchBST(root.left,val)
    
};

//*Insert into a Binary Search Tree - bottom up

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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    //as soon as it hits null insert that new node with value
    if(!root) return new TreeNode(val)
    //this logic will take care of where to insert node
    if(root.val < val){
        root.right = insertIntoBST(root.right,val)
    }else{
        root.left = insertIntoBST(root.left,val)
    }

    return root // return root so woh bottom se root node tak jayga and then it will return root 


};