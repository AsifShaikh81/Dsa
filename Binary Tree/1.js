
//*Preorder Traversal - Recursive Approach
//*root->left->right , root at start

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
    let ans = [] // push the answer
    function traversal(curr){
        if(!curr) return 
        ans.push(curr.val)
        traversal(curr.left)
        traversal(curr.right)
    }
    traversal(root)
    return ans
    
};

//* inorder -recursive approach
//*left->root->right , root in middle
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
var inorderTraversal = function(root) {
    let ans = [] // to push values
    function Itraversal(curr) {
    if(!curr) return // vvv imp base case
    Itraversal(curr.left) // travel left subtree
    ans.push(curr.val) // push the left value
    Itraversal(curr.right) // travel right subtree
    }
    Itraversal(root) // calling function with root
    return ans 
    

};

//* postorder -recursive approach
//*left->right->root , root at end  

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
var postorderTraversal = function(root) {
    let ans =[]
   function Ptraversal(curr){
    if(!curr) return // vvv imp base case
    Ptraversal(curr.left) // left subtree
    Ptraversal(curr.right) // right subtree
    ans.push(curr.val)
   }
   Ptraversal(root)
   return ans
};