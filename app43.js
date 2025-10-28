// 150. Evaluate Reverse Polish Notation
//https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(arr) {
    let stack = []
    for(let i=0; i<arr.length ; i++){
        // if arithmetic operation run this
        if(['+','-','*','/'].includes(arr[i])){
            // pop prev 2 value
            let a = stack.pop()
            let b = stack.pop()
            //evaluate       5       +       2
            let ans = eval(`${b} ${arr[i]} ${a}`) // eval is js in built function it is used to evaluate
            //push evaluated val in stack
            stack.push( Math.trunc(ans)) // Math.trunc is js in build help to truncates toward zero => 1.5=1

        }else{
            // if number just push in stack
            stack.push(arr[i])
        }
    }
    return Number(stack.pop()) // converting final ans from str to number and returning
};


// 496. Next Greater Element I
// https://leetcode.com/problems/next-greater-element-i/description/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, arr) {
    let ngeMap = {};
    let stack = [];
    let n = arr.length;

    stack.push(arr[n-1]);
    ngeMap[arr[n-1]] = -1;
    for(let i=n-2; i>=0; i--){
        let top = stack[stack.length-1];
        if(arr[i] < top){
            ngeMap[arr[i]] = top;
        }
        else {
            while(stack.length) {
                if(stack[stack.length-1] < arr[i]){
                    stack.pop();
                } else {
                    ngeMap[arr[i]] = stack[stack.length-1];
                    break;
                }
            }
            if(stack.length === 0){
                ngeMap[arr[i]] = -1;
            }
        }
        stack.push(arr[i]);
    }
    let ans = [];
    for(let i=0; i < nums1.length; i++){
        ans.push(ngeMap[nums1[i]]);
    }
    return ans;
};
