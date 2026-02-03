
//*Level Order Traversal - Queue - BFS
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [] // corner case
    let q = [root] // q init with root
    let ans = [] // final ans
    // loop run till my q exist
    while(q.length){
        let levelarr = [] // to store element of the specific level
        let levelsize = q.length // getting length of levelarr
        // this for loop run till levelsize
        for(let i =0; i<levelsize; i++){
            let curr = q.shift() // removing/shifting element
            curr.left && q.push(curr.left) // pushing left ele only if left exist 
            curr.right && q.push(curr.right) // pushing right ele only if right exist 
            levelarr.push(curr.val)
        }
        ans.push(levelarr)

    }
    return ans
    
};

//*Level Order Traversal - recursive app
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [] // corner case
    let ans = [] // init ans
    // level is to track level
    let traversal = (curr,level) =>{
    if(!ans[level]) ans[level] = [] // if no ans[level] initialize with empty array []
    ans[level].push(curr.val)
    // if curr.left exist than call traversal function with left node and level +1
    curr.left && traversal(curr.left ,level+1) 
    curr.right && traversal(curr.right ,level+1)
    } 
    traversal(root ,0)
    return ans


};
