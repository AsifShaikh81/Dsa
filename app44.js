// 739. Daily Temperatures 
// https://leetcode.com/problems/daily-temperatures/description/


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
    let stack = []; // init stack
    let n = arr.length; 
    let ans = Array(n).fill(0); // filling ans array with zeros till length of arr

    stack.push(n-1); //pushing last index of arr in stack 
    //looping from last 
    for(let i = n-2; i >= 0; i--){
        // while loop run till stack lenght exist
        while(stack.length) {
            // gettin top element
            let top = stack[stack.length-1];
            // if curr temp is greater than top of stack than pop it 
            if(arr[i] >= arr[top]) {
                stack.pop();
            // if curr temp is less than top of stack than subtract top index from curr index
            } else {
                ans[i] = top - i;
                break;
            }
        }
        // push the index in stack u got after subtracting
        stack.push(i);
    }
    // return the final ans
    return ans;
};