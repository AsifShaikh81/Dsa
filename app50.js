
// Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(a) {
    let l = 0
    let r = a.length-1

    while(l<=r){
     
     // if array is sorted 
     if(a[l]<=a[r]){
        return a[l]
     }
     let m = l+ Math.floor((r-l)/2)
     // if middle element is less than m-1 than it is a rotation point, return m
     if(a[m] < a[m-1]){
        return a[m]
     }

     // if my left half is non sorted, move r to left half of array 
     if(a[l] > a[m]){
         r = m-1
     }  
     else{
        l = m+1
     }
    

    }
};