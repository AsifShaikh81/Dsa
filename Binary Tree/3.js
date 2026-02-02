
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
