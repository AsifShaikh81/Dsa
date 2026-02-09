//*Balanced Binary Tree

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
var isBalanced = function(root) {
    let ans = true
    let calHt = (curr)=>{
        // if null return 0
        if(!curr) return 0 
       let leftHt= calHt(curr.left)
       let rightHt = calHt(curr.right)
       //Math.abs return positive integer
       if(Math.abs(leftHt-rightHt) >1){
        ans =ans && false
       }
        return 1 + Math.max(leftHt, rightHt)
    }
    calHt(root)
    return ans


};



//*Diameter of Binary Tree
/**
  https://leetcode.com/problems/diameter-of-binary-tree/submissions/1913343128/
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
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0
    let findDepth = (curr)=>{
    if(!curr) return 0
    let leftdepth = findDepth(curr.left)
    let rightdepth = findDepth(curr.right)

     let currDiameter = leftdepth + rightdepth // calculate diameter
     maxDiameter = Math.max(currDiameter,maxDiameter) // get max diameter
     return 1+ Math.max(leftdepth,rightdepth)
    }
    findDepth(root)
    return maxDiameter 
    
};