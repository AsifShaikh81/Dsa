// https://leetcode.com/problems/subsets-ii/
// 90. Subsets II

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(arr) {
    let result = []
    arr.sort((a,b)=>a-b) // sorting to combine duplicate
    let backtrack = (path,start)=>{
        result.push([...path])
      for(let i = start; i<arr.length; i++){
        // i is > than start && current i is === to prev i then skip 
        if(i>start && arr[i-1] === arr[i]) 
          continue
          path.push(arr[i])
          backtrack(path, i+1)
          path.pop()
      }
    }
    backtrack([],0)
    return result
};