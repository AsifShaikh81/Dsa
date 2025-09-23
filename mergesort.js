/**
 * @param {number[]} nums
 * @return {number[]}
 */
// https://leetcode.com/problems/sort-an-array/
var sortArray = function(arr) {
 
 if(arr.length<=1) return arr
 let mid =Math.floor(arr.length/2) // dividing array into tow parts
 let left = sortArray(arr.slice(0,mid)) // store left part of the array
 let right = sortArray(arr.slice(mid)) // store right part of the array 
 return merge(left ,right) // calling helper function

    
};
// helper function to merge two sorter array into single array
function merge(left,right){
    let res = [] // initiating emoty error to push element inside it
    let i= 0 
    let j =0
    // if i and j is less than its length than only run the loop
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){ // is left less than right ,if yes push left element or else it will to else block
            res.push(left[i])
            i++
        }else{
            res.push(right[j])
            j++
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)] 
    //...res =>jo bhi res array mein usko add karo and it will return 
   //...left.slice(i), ->if any remaining element in left array add it and return 
   //...right.slice(i), ->if any remaining element in right array add it and return 
}