//*Preorder Traversal - Iterative Approach

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
    if(!root) return []// if no root return empty stack/array, corener case
    let ans =[] // to store ans
    let stack = [root] // initially stack have root node 
    // loop will jab tak stack.length exist
    while(stack.length){
        let curr = stack.pop() // curr stores element poped out from stack 
        ans.push(curr.val) // push curr.val in ans
        curr.right &&stack.push(curr.right) // push right elem to stack only if curr.right exist
        curr.left &&stack.push(curr.left) // push left element to stack  only if curr.left exist
        
        //*pushing right first ans left second becz stack follows LIFO method

    }
    return ans
    
};
//*Inorder Traversal - Iterative Approach
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
  let curr =root // curr become root
  let stack = [] // empt stack
  let ans =[] // to store ans
  // while curr or stack.length exist run loop
  while(curr || stack.length) {
    // this loop is to push left node
    while(curr){
        stack.push(curr) // push curr element
        curr = curr.left // curr become left 

    }
    // pop element in stack
    curr = stack.pop()
    ans.push(curr.val) // push curr value in ans 
    curr = curr.right // curr become right
  }
  return ans
};

//* Postorder - Iterative Approach - 2 Stacks
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
    if(!root) return []
    let s1 = [root] // push child of curr elem
    let s2 =[] // push curr ele
    while(s1.length){
       let curr = s1.pop() // pop curr elem from s1
        s2.push(curr) // push curr elem
        // push its child
        curr.left && s1.push(curr.left) // left child
        curr.right && s1.push(curr.right) // right child

    }
    let ans= [] // for storing ans
    //loop runs till s2.length exist
    while(s2.length){
        ans.push(s2.pop().val) // poping val and pushing in ans , reverse order
    }
    return ans
};