// Kth Smallest Element in a Sorted Matrix
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/description/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  let heap = new MinPriorityQueue(x=>x.val)  
  let n = matrix[0].length // column ->n=3

 // add elem to min heap
  for(let i=0;i<n;i++){
    heap.push({val:matrix[i][0], row:i, col:0})
  }
  
  //loop it till k-1 and pop min elm and push next elm , keep on doing u will get kth smallest elm
  for(let count=0; count<k-1; count++){
   let {val,row,col} = heap.pop() // removing the min elem and also getting its val,row,col
   if(col+1 < n){
   heap.push({val:matrix[row][col+1], row:row, col:col+1})
   }
  }

  return heap.pop().val

};