//1 move zeros 
// https://leetcode.com/problems/move-zeroes/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let x = 0
    for(i=0;i<nums.length;i++){
    // check if element in array is equal to zero or not, if element equal zero run the condition
     if(nums[i] !==0){
            nums[x]=nums[i]
            x++
        }
    }
    
 // once my loop end fill the remaining elem with zero 
 for(i=x;i<nums.length;i++){
    nums[i] =0
 }
}


2.//consecutive ones
//https://leetcode.com/problems/max-consecutive-ones/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count =0
    let maxcount=0
    for(i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++
           
        }else {
         //dono mein se jo bada/max hoga usko 'maxcount' mein store kar lega
           maxcount = Math.max(count , maxcount) 
           count = 0
           }
    }
    // dono mein se jo max/bada hai usko return kardo
    return Math.max(maxcount,count)
};