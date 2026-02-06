//*   Symmetric Tree - Recursive Approach

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
var isSymmetric = function(root) {
    let isMirror = (leftTree ,rightTree)=>{
        // if leaf node -> no child
        if(!leftTree && !rightTree) return true
        // if one of the chile is not present return false
        if(!leftTree || !rightTree) return false

        // this 3 condition should be true
        return leftTree.val === rightTree.val &&
                isMirror(leftTree.left , rightTree.right) &&
                isMirror(leftTree.right , rightTree.left)
    }
    return isMirror(root.left , root.right)
};

//* itre approach
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
var isSymmetric = function(root) {
    let q  = [root.left,root.right]
    while(q.length){
        let p1 = q.shift()
        let p2 = q.shift()
         
         // if no left child and right child iska mtlb ye leaf node hai continue
         // continue -> skip aage ka code aur loop se start
         if(!p1 && !p2) continue
        
        // if one of the child missing then return false, its not mirror tree
         if(!p1 || !p2) return false
        
        //if both pair val is not same than its not mirror return false
        if(p1.val !=p2.val) return false
        
        // rember bcz its mirrir isliye aise compar kar rahe hai
        q.push(p1.left , p2.right)
        q.push(p1.right , p2.left)
        
    }
    return true // loop ends ,que empty return true
        

    
};