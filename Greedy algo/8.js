//* 621. Task Scheduler

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  // coun freq of each char
  let freq = {}
  let maxFreq = 0 // to store maxFreq of char
  // for of loop gives value , used for arr,str , iterable things
  for(let tsk of tasks){
    if(freq[tsk]){
        freq[tsk]++
    }else {
        freq[tsk] =1
    }
    maxFreq = Math.max(maxFreq,freq[tsk])
}

 // count max freq of task
 // for in loop gives key/property name
 let countOfMaxFreqChar = 0
 for(let key in freq){
    if(freq[key] === maxFreq){
        countOfMaxFreqChar++

    }
 }

    let cycles  = (n+1)*(maxFreq -1) + countOfMaxFreqChar

    //why not just return 'cycles'?
    // bcz sometimes 'cycles' becomes smaller than total task, which is impossible
    return Math.max(tasks.length,cycles)
    
};