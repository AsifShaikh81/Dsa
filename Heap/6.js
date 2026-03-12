// *1046. Last Stone Weight
// https://leetcode.com/problems/last-stone-weight/description/
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let pq = new MaxPriorityQueue
  // add stones to max heap/priority queue
  for(let i=0 ; i<stones.length;i++){
    pq.enqueue(stones[i])
  }

 while(pq.size()>1){
    let y = pq.dequeue() // largest value
    let x = pq.dequeue() // second largest 
    if(y-x>0){
        pq.enqueue(y-x)
    }
 }
   return pq.dequeue() || 0
};