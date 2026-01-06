// https://leetcode.com/problems/two-sum/submissions/1876201990/
//*Two sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  // brute force approach 
   for(i=0;i<nums.length;i++){
    for(j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j]===target){
            return [i,j]
        }
        
    } 
   }
};

// approch 2 - object / map
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let map = {}
    let n = arr.length
    // creating this loop to store arr in onject/map
    for (let i = 0 ; i < n ; i++ ){
        map[arr[i]] = i

    }

    for (let i = 0 ; i<n ; i++){
        // after subt storing diff in pairtofind var
        let pairToFind = target - arr[i]
        if(map[pairToFind] && map[pairToFind] != i){
            return [i , map[pairToFind]]
        }
    }
    
};


//*two sum - II
//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
  let i =  0
  let j =  arr.length-1 // start from back of array
  
  // while loop will break before i , j cross
  while(i<j){
    let sum = arr[i]+arr[j]
    if(sum > target){
        --j
    }else if(sum < target){
        ++i
    }else if(sum ==target){
        return [i+1,j+1]
    }
  }

};