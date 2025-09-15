    // 136. Single Number
    // explaination  in notebook

    var singleNumber = function(nums) {
/*     approach 1
  let hash ={}

  for(let i=0;i<nums.length;i++){
    if(!hash[nums[i]]){
        hash[nums[i]] = 1
    }else{
        hash[nums[i]]++
    }
  }
  for(let i=0;i<nums.length;i++){
    if(hash[nums[i]]== 1){
    return nums[i]
    }
  } */
  //approach 2 => bitwise zor
  let xor = 0

  for(let i=0;i<nums.length;i++){
    //automatically removes duplicate element
    xor = xor ^ nums[i]

  }
  return xor
    
};


// https://leetcode.com/problems/two-sum/
// two sum khud se solve kiya 
// but submit nahi ho raha ha 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let p1 = 1
  for(i=0;i<nums.length;i++){
     if(nums[i]+nums[p1]==target){
        return [i,p1]
    }
    p1++

  }  
};