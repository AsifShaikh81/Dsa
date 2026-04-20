// https://leetcode.com/problems/non-overlapping-intervals/
//* 435. Non-overlapping Intervals
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(arr) {
    // sort by endtime
    arr.sort((a,b)=>(a[1]-b[1]))
    let removeCount = 0
    let k  = -Infinity
    for(let i =0;i <arr.length;i++ ){
        if(arr[i][0]< k){
            ++removeCount
        }else{
            k = arr[i][1]
        }
    }
    return removeCount
};