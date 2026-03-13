
//*Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/description//
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(arr, k) {
    // create map and add elem to map
    let map ={}
    for(let i=0;i<arr.length;i++){
        if(!map[arr[i]]) map[arr[i]] = 0
        ++map[arr[i]]
    }

    // create min heap and add map to heap according to priority
    let pq = new MinPriorityQueue(x=>x.freq)
    //x=>x.freq -> based on highest freq it will add
    for(key in map){
        pq.push({val:key, freq:map[key]})
        if(pq.size()>k){
            pq.pop() // removing smallest element 
        }
    }
    // return remaining elem in heap/pq
    // convert to array and get "val" out of that array in number form and return 
    return pq.toArray().map(x=>Number(x.val))
};