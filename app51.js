
//34. Find First and Last Position of Element in Sorted Array
// apr -2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(arr, target) {
  let l = 0
  let r = arr.length-1
  let ans = [-1,-1] // to store ans
  // left half
  
  // loop run till l and r are at same point 
while(l<=r){
    let m =l + Math.floor((r-l)/2)
    //if m is equal to target ,store m in ans and move r to left half
    if(arr[m] === target){
        ans[0] =m
        r = m-1

    }
  // if m less than target move l to m+1, else move r =m-1
   else if(arr[m]< target){
     l = m+1
    }
    else {
        r = m-1
    }
  }
  
  // reset l and r
  // right half
  l = 0
  r= arr.length-1
   while(l<=r){
    let m =l+ Math.floor((r-l)/2)
     //if m is equal to target ,store m in ans and move l to right half
    if(arr[m] === target){
        ans[1] =m // update ans arr
        l = m+1

    }
    // if m less than target move l to m+1, else move r =m-1
   else if(arr[m]< target){
     l = m+1
    }
    else {
        r = m-1
    }
  }
  return ans
};

//* 852. Peak Index in a Mountain Array
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0
    let r = arr.length-1
    // loop runs till my l r cross
    while(l<r){
        let m = Math.floor((l+r)/2)
        // if m+1 is greater than m than peak is on right side
        if(arr[m+1]>arr[m]){
            l = m+1
        }
    //if m+1 is less than m than cur element is peak or peak is on left side
        else{
            r = m
        }
    }
    return l 
};