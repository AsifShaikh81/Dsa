// *Container With Most Water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {
    let i =0 
    let j =arr.length - 1 
    let maxWater = 0 // to store max number
    while(i<j){
     // calculating area - formula
     let area = Math.min(arr[i],arr[j]) * (j-i) // find the min bet i and j and mul with j-i
     maxWater = Math.max(maxWater,area) //find max betw maxWater and area
     
     // if i is greater than j move --j else move i++,  goal is to remove shorter value
     if(arr[i]> arr[j]){
        --j;
     }else {
       ++i;
     }

     
    }
    return maxWater
};