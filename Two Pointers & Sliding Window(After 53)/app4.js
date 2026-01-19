//*three sum
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            twoSum(nums, i, ans);
        }
    }
    return ans;
};
var twoSum = function(arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j] + arr[x];
        if (sum > 0) {
            j--;
        } else if (sum < 0) {
            i++;
        } else {
            ans.push([arr[i], arr[j], arr[x]]);
            i++;
            j--;
            // Skip duplicates for the second element
            while (i < j && arr[i] === arr[i - 1]) {
                i++;
            }
        }
    }
};

//*https://leetcode.com/problems/trapping-rain-water/description/
//* 142. Trapping Rain Water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    // here height is arr
    let n = arr.length
    let maxL = []
     maxL[0]  = arr[0]
     // this loop is to fins maxL
    for(let i =1 ; i<n ; i++){
        // max between height itself and prev height
       maxL[i] =  Math.max(maxL[i-1],arr[i])
    }
    // this loop is to find maxR
    let maxR = []
     maxR[n-1] = arr[n-1]
    for(let i =n-2 ; i>=0 ; i--){
        // max between height itself and next height
       maxR[i] =  Math.max(maxR[i+1],arr[i])
    }

    let ans = 0
    for(let i =0 ; i<n ; i++){
        // get the min between maxR and maxL - height
        let watertrapped =  (Math.min(maxR[i], maxL[i])  - arr[i])
        // if ans is less than zero, store zero or store watertrapped in ans 
        ans = ans + (watertrapped <0 ? 0 : watertrapped)

}
return ans

};