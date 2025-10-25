//https://leetcode.com/problems/remove-outermost-parentheses/
//1021. Remove Outermost Parentheses

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let stack = [] // init stacl
    let ans="" // to store the parantheses
    for (let i=0 ; i<s.length ; i++){
        // if open bracket push it to stack 
        if(s[i]==='('){
            stack.push(s[i])
            // if length of stack is greater than 1 add it to ans
            if(stack.length>1){
                ans = ans + s[i]
            }
        }else{
            // before pop check length of stack if its greater add it to ans than pop
            if(stack.length>1){
                ans = ans + s[i]
            }
            stack.pop()
        }
    }
    return ans
    
};

//*appproach 2 -without using stack
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let level = 0 // maintaining level 
    let ans = "" // to store the parantheses
    for (let i=0 ; i<s.length ; i++){
        // if open bracket inc level by 1
        if(s[i]==='('){
            level++
            // if length of level is greater than 1 add it to ans
            if(level>1){
                ans = ans + s[i]
            }
        }else{
            // check length of level if its greater than 1 add it to ans than dec level
            if(level>1){
                ans = ans + s[i]
            }
            level--
        }
    }
    return ans
    
};