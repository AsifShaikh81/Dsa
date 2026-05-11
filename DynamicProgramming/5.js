// * 213. House Robber II
// https://leetcode.com/problems/house-robber-ii/
var rob = function(nums) {
 //base case
  let n = nums.length
  if(n==1) return nums[0]
  //calculate max profit from start to end
  var robHelper = function(start,end) {
  let p1 = 0
  let p2 = 0
  for(let i=start; i<=end;i++){
    curr = Math.max(nums[i]+p2,p1)
    let temp = p1
    p1 = curr
    p2 = temp
    curr++

  }
  return p1

};
return Math.max(robHelper(0,n-2),robHelper(1,n-1))
};