//*215. Kth Largest Element in an Array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let pq = new MinPriorityQueue()
    
    // run loop and push elem of nums in heap 
    for(let i =0 ; i<nums.length; i++){
        pq.enqueue(nums[i]) // it will add elem and heapify it 
        if(pq.size()>k){
            pq.dequeue() //it will add elem and heapify it 
        }
    }
    return pq.front() // top element(heap's root) will be your answer
};