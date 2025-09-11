
// https://leetcode.com/problems/missing-number/
// 268. Missing Number
var missingNumber = function(nums) {
     // stores array length
    let n= nums.length
    // imp formula, stores sum of array 
    let totalSum = n * (n+1)/2
    // set partial sum to zero
    let partialSum =0
    for(i=0;i<n;i++){
        // 0           0           1
        // 1           1            2
        // 3          3             4
        // 7          7             5
        partialSum = partialSum + nums[i]
    }
    //       15          12 =3
    return totalSum - partialSum

}