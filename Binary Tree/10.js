
//*Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
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
    let lca = null // at start null
    let traversal= (curr)=>{
    if(!curr) return 0
    let count = 0 
    let ansOnLeft = traversal(curr.left)
    let ansOnRight = traversal(curr.right)
    if(curr.val == p.val || curr.val == q.val){
        count++
    }
    count = count + ansOnLeft + ansOnRight
    if(count === 2 && !lca){
        lca = curr
    }
    return count

} 
  traversal(root) 
  return lca
};



//*199. Binary Tree Right Side View - itrative
//*https://leetcode.com/problems/binary-tree-right-side-view/description/
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
var rightSideView = function(root) {
    if(!root) return []
    let ans = []
    let q = [root]
    
    while(q.length){
        let levelsize = q.length
        for(let i=0; i<levelsize ; i++){
            let curr = q.shift()
            // only push first node to ans
            i == 0 && ans.push(curr.val)

            //impt-> push right first then left
            curr.right && q.push(curr.right)
            curr.left && q.push(curr.left)

        }
    }
    return ans
};

//* recursive approach 
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
var rightSideView = function(root) {
    // if(!root) return []
    let ans = []
 let traversal = (curr, depth)=>{
        if(!curr) return // if leaf node return 
        // push first node
        if(depth === ans.length){
            ans.push(curr.val)
        }
        // imp -> traverse first node than left node
        curr.right && traversal(curr.right, depth +1)
        curr.left && traversal(curr.left, depth + 1)

    }
    traversal(root,0)
    return ans
    
};