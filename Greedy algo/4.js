/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(arr, x) {
    // intervals = arr
    // newInterval = x
  let ans = []
  let n = arr.length
  let i = 0

  //Add all left part
  while(i<n && arr[i][1]<x[0]){
    ans.push(arr[i])
    ++i
  }

  //Add the overlaping part
  while(i < n && arr[i][0] <= x[1]){
        x[0] = Math.min(x[0], arr[i][0]);
        x[1] = Math.max(x[1], arr[i][1]);
        ++i;
    }
    ans.push(x);

  // Add right part
  while (i<n){
    ans.push(arr[i])
    ++i
  }
  return ans
};