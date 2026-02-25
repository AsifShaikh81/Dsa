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
        return (2*i) + 1
        
    }
    // get right childe
    getRightChildIndex(i) {
        return (2*i) + 2
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

let Heap1 = new MinHeap()
Heap1.insert(10)
Heap1.insert(20)
Heap1.insert(1)

console.log(Heap.heap)



//*Extracting a node in Heap

//creating minHeap
class MinHeap{
    constructor(){
        this.heap =[] // initializing heap with empty array
        //or 
        // this.heap = [5,10,3,8,20]
    }
    // get left child
    getLeftChildIndex(i) {
        return (2*i) + 1
        
    }
    // get right childe
    getRightChildIndex(i) {
        return (2*i) + 2
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
    
extract(){
    // this extract function delete/extract element at top
    if(this.heap.length < 1) return null
    let min =this.heap[0] // first element 
    let lastElm = this.heap.length - 1; // last element
    
//note element can be only extracted/deleted from the top  
// swapping last element with firs element to delete first element 
[this.heap[0], this.heap[lastElm]] = [this.heap[lastElm],this.heap[0]] 
        
this.heap.pop() // poping the last element from array after swap 
this.heapifyDown(0) // calling heapifydown with zero index
return min
        
        
    }
heapifyDown(i){
    // i is 0 , i = 0
    let smallest = i //0
    let left = this.getLeftChildIndex(i)
    let right = this.getRightChildIndex(i)
    
    let n = this.heap.length
     
    if( left < n && this.heap[left] < this.heap[smallest]){
        smallest = left // swapping index 
    }
    if( right < n && this.heap[right] < this.heap[smallest]){
    smallest = right // swapping index 
    }
    
    if(smallest != i ){
        // actual element swapping
        [this.heap[smallest], this.heap[i]] = [this.heap[i],this.heap[smallest]]
        this.heapifyDown(smallest) // keep on calling until heap property is satisfied
    }
    
}

peek(){
    if(!this.heap.length) return null // if heap empty return nulll
    return this.heap[0]
}
    
}

let Heap = new MinHeap()
Heap.insert(0)
Heap.insert(10)
Heap.insert(20)
Heap.insert(1)
Heap.extract()

console.log(Heap.heap)

