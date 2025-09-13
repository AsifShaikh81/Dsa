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