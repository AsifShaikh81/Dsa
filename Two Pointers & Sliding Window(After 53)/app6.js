/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(arr, k) {
  let res = [] // to store max
  let q = [] // deque  
  let i = j =0
  while(j<arr.length){
    while(q.length && arr[j]>q[q.length-1]) {q.pop()}
    q.push(arr[j])

 //when window size is k , push max element of that window
 if(j>=k-1){
    res.push(q[0])
 
    // if the leftmost elemet for current window(arr[i]) is largest q[0] then remove it
    arr[i] == q[0] && q.shift()
    ++i
 }
  
  ++j
  }
  return res
};

