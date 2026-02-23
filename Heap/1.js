//Inserting a node in Heap

//creating minHeap
class MinHeap{
    constructor(){
        this.heap =[] // initializing heap with empty array
        //or 
        // this.heap = [5,10,3,8,20]
    }
    // get left child
    getLeftChildIndex(i) {
        return (2*1) + 1
        
    }
    // get right childe
    getRightChildIndex(i) {
        return (2*1) + 2
    }
    // get the parent
    getParentIndex(i){
        return Math.floor((i-1)/2)
    }
    
    // insert val in heap
    insert(val) {
        this.heap.push(val)
        let lastIndex = this.heap.length-1
        this.heapifyUp(lastIndex)
    }
    
    // checking for heapify 
    heapifyUp(i){
        while(i>0){
        let parentIndex = this.getParentIndex(i)
        if(this.heap[i] < this.heap[parentIndex]){
         [this.heap[i],this.heap[parentIndex]] = 
         [this.heap[parentIndex],this.heap[i]]
         i=parentIndex // shift to its parent for checking
            //[a,b]=[b,a] // short trick to swap
        }else {
            break
        }
        }
    }
    
}

let Heap = new MinHeap()
Heap.insert(10)
Heap.insert(20)
Heap.insert(1)

console.log(Heap.heap)

