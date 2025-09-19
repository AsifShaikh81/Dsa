//linear search

function linear(arr,target) {
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return ('no element found')
}
let a = [3,2,1,-1,0,5]
find = 5
let result = linear(a,find)
console.log(result)


// https://leetcode.com/problems/binary-search/description/
// 704. Binary Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
 let left = 0 // left starts from 0th index
 let right = nums.length - 1 // right starts from last index
 
 // if right is greater and equal to left then run code.
 // this condition is applied to check wheather right and left cross each other, if they cross then return -1
 while(right>=left){
    let middle = Math.floor((left+right)/2) // formula for middle
    // if target equal to middle element return middle index
    if(target===nums[middle]){
        return middle
    }
    else if(target>nums[middle]){
        left = middle+1 // formula to shift 'left'

    }else {
        right = middle-1 // formulat to shift 'right'
    }
    
  
  }
  return -1  

};