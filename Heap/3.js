//prioriy queue code
// Priority Queue Code
// implementing enqueue,dequeue, heapifyup , heapifydown, size, empty,front 

class MaxHeapPQ {
    constructor() {
        this.heap = []
    }
    // enqueue -add 
    enqueue(value, priority) {
        this.heap.push({ value, priority })
        this.heapifyUp()
    }
    // dequeue -remove
    dequeue() {
        if (this.heap.length === 0) return null
        let max = this.heap[0]
        let end = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = end 
            this.heapifyDown()
        }
        return max
    }

    heapifyUp() {
        let index = this.heap.length - 1
       
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2)
            if (this.heap[index].priority <= this.heap[parent].priority) break
            this.swap(index, parent)
            index = parent
        }
    }

    heapifyDown() {
        let length = this.heap.length - 1
        let index = 0
        let left = 2 * index + 1
        let right = 2 * index + 2
        let largest = index // assume largest is index
        while (true) {
            if (left < length && this.heap[left].priority > this.heap[largest].priority) {
                largest = left
            }
            if (right < length && this.heap[right].priority > this.heap[largest].priority) {
                largest = right
            }

            if (largest === index) break
            this.swap(index, largest) //D
            index = largest
        }

    }
    // Swap Helper
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
    // view front element
    front() {
        return this.heap.length > 0 ? this.heap[0] : null
    }

    size(){
        return this.heap.length

    }

    isEmpty() {
        return this.heap.length === 0 
    }
}

let pq = new MaxHeapPQ()

pq.enqueue("Heart Attack", 3)
pq.enqueue("fever", 4 )
pq.enqueue("accident", 2)

console.log(pq.dequeue()) // it will return highest priority task

//higher the number ,higher the priority
