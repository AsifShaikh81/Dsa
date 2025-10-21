// playing with stack and queues

// # stack
// opreation - push(),pop(), peek/top 
// LIFO - LAST IN FIRST OUT

console.log("---------STACK---------");

let stack = []

stack.push(1)
stack.push(10)
stack.push(8)

console.log('push:',stack);

stack.pop()
console.log('pop:',stack);

// peek/top
let peek = stack[stack.length-1]
console.log('peek->return top element:',peek);

//stack[3] -  invalid stack operation 

//* note - dont use stack & queuef as a array 


//2) queue
console.log("---------QUEUE---------");
// FIFO - FIRST IN FIRST OUT 
// opreation -  enqueue(add) , dequeue(remove), peek/front

let q = []

q.push(1)
q.push(2)
q.push(3)
q.push(4)
console.log('enqueue:', q);

q.shift()
q.shift()
console.log('dequeue:', q);

let peek2 =  q[0]
console.log("peek2-> return front element:",peek2);
