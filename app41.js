//https://leetcode.com/problems/valid-parentheses/description/
//20. Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let map = {
        "{":"}",
        "[":"]",
        "(":")"
    }
    for(let i=0 ; i<s.length ; i++){

      if(map[s[i]]){
        stack.push(s[i])
      }else{
        let top = stack.pop()
        if(!top || s[i]!= map[top]){
            return false
        }
      }

    }
    return stack.length === 0
};

//-----------------------------------------------
// https://leetcode.com/problems/min-stack/description/
// 155. Min Stack
var MinStack = function() {
    this.s = [] // ini stack
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // when u push u have to push curr value as well as min value 
    // if stack empty push only val as a array => [8,8]
    if(this.s.length ===0){
        this.s.push([val,val])
    
    // else get last min val compare it with val and last min val then push val and min val
    }else{
    let lastminval = this.s[this.s.length-1][1] 
    let minval = Math.min(val, lastminval)
    this.s.push([val,minval])
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.s.pop()  
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length-1][0]
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        return this.s[this.s.length-1][1]
    
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */