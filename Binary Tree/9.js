//*572. Subtree of Another Tree
//* https://leetcode.com/problems/subtree-of-another-tree/description/

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    let hashtree = serialize(root)
    let hashSubTree = serialize(subRoot)
    
    // u can also use kmp to check subString
    // check 
    return hashtree.includes(hashSubTree)
};

let serialize = function(root){
    let hash = ""
    let traversal = (curr)=>{
        if(!curr) {
            hash = hash + "-#"
            return
        }
        hash = hash + "-" + curr.val
        traversal(curr.left)
        traversal(curr.right)
    }
    traversal(root)
    return hash
}