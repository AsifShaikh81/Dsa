
// https://leetcode.com/problems/implement-stack-using-queues/
//225. Implement Stack using Queues
var MyStack = function() {
   // init two queue
    this.q1 = [] //main queue
    this.q2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
 this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
   let n = this.q1.length // checking size/length of main queue(queue which contains element)
 // loop will run till (n-1)
 for(let i=0;i<n-1;i++){
    let frontElm = this.q1.shift() // dequeue -> remove element from  q1 queue 
    this.q2.push(frontElm) // enqueue -> add to q2

 }  
 let ans = this.q1.shift() // the last element, remove it from queue
 //exchange q1 and q2
 let temp =this.q1
 this.q1 =this.q2
 this.q2=temp
  
// finally return the element which u poped from queue
return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  let n = this.q1.length
  for(let i=0; i<n-1; i++){
     let frontElm = this.q1.shift() 
    this.q2.push(frontElm)
  }

  
  let lastElm = this.q1[0] // get last element
  this.q2.push(lastElm) // push to q2
  this.q1.shift() // and then remove it from q1
  //exchange q1 and q2
 let temp =this.q1
 this.q1 =this.q2
 this.q2=temp

 return lastElm
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0 // if queue is empty return true else false
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// approach 2 - using 1 queue

var MyStack = function() {
    this.q = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.q.push(x)  
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q.length
    for(let i=0 ; i<n-1 ; i++){
        let elm = this.q.shift() // dequeue
        this.q.push(elm) // pushing to same q
    }
    return this.q.shift() // returning the last poped element
    
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     let n = this.q.length
    for(let i=0 ; i<n-1 ; i++){
        let elm = this.q.shift() // dequeue
        this.q.push(elm) // pushing to same q
    }
    let topElm = this.q[0]
    this.q.push(topElm)
    return topElm
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length ===0
    
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */