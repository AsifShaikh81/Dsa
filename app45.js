//https://leetcode.com/problems/next-greater-element-ii/
// approach 1 -doubled array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let arr = [...nums, ...nums] // doubling array
    let stack = []//init stack
    let n = arr.length
    let ans =  Array(n).fill(-1) // creating 'ans' array and filling with -1 till the length of both the array 
    
    stack.push(arr[n-1]) // pushing element of array in stack from behind
    
    for(let i=n-2 ; i>=0 ; i--){
        // run while loop till stack exist
        while(stack.length){
            let top = stack[stack.length-1] // getting top of stack
            if(arr[i]<top){
                ans[i] =top
                break
            }else{
                stack.pop()
            }
          }
        stack.push(arr[i]) 
     

    }
    return ans.slice(0,n/2) // returning only 1st part of 'arr'
};

//approach 2 - modifying index of same array

var nextGreaterElements = function(arr) {
    let n = arr.length;
    let stack = [];
    let ans = Array(n).fill(-1);
    stack.push(arr[n-1]);
    for(let i=(2*n)-2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i % n] < top){
                ans[i % n] = top;
                break;
            } else{
                stack.pop();
            }
        }
        stack.push(arr[i % n]);
    }
    return ans.slice(0, n);
};