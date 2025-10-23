// https://leetcode.com/problems/implement-queue-using-stacks/description/
//232. Implement Queue using Stacks
var MyQueue = function() {
    this.s1 = [] // main stack
    this.s2 = [] // helper stack
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x) // simple push 
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // check is s2 stack empty? 
    if(this.s2.length === 0){
        // loop will run till s1 exist 
        while(this.s1.length){
            // push to s2 stack and simaltan pop from s1 
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2.pop() // return the last element
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
      // check is s2 stack empty? 
    if(this.s2.length === 0){
        // loop will run till s1 exist 
        while(this.s1.length){
            // push to s2 stack and simaltan pop from s1 
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2[this.s2.length-1] // peek the element and return 
 };

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.s1.length === 0 && this.s2.length ===0 // return it if both the stack is empty
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */