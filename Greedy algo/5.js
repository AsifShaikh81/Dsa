// https://leetcode.com/problems/merge-intervals/
//*Merge Intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(arr) {
  arr.sort((a,b)=> (a[0]-b[0]))
  let ans = [arr[0]]
  for(let i =1 ; i<arr.length ; i++){
    // if curr intervl is <= to ans last interval
    if(arr[i][0]<=ans[ans.length-1][1]){
        // get the max out of arr[i][1] and ans[ans.length-1][1]
      ans[ans.length-1][1] = Math.max(arr[i][1],ans[ans.length-1][1])

    }else {
        ans.push(arr[i])
    }
  }
  return ans
};