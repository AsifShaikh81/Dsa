//*Find K Closest Elements
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

var findClosestElements = function(arr, k, x) {
    let l = 0
    let r = arr.length-1
    while(l<r){
        //small formula 
        let m = Math.floor((l+r)/2)
        if((arr[m+k]-x) < (x-arr[m])){
            l = m+1
        }else{
            r= m
        }
    }

    // returning subarray
    let ans = []
    for(i=l ; i<l+k ; i++){
        ans.push(arr[i])
    }
    return ans

    // or u can skip above code just use js slice
   // return arr.slice(l,l+k)
};