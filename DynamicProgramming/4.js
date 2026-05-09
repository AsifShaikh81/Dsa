//* 198. House Robber
//https://leetcode.com/problems/house-robber/ 

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length
  if(n==1) return nums[0]
  let p1 = 0
  let p2 = 0
  for(let i=0; i<n;i++){
    curr = Math.max(nums[i]+p2,p1)
    let temp = p1
    p1 = curr
    p2 = temp
    curr++

  }
  return p1

};