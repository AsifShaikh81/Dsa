
// 26. Remove Duplicates from Sorted Array 
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function(nums) {
    let x =  0;
    for (i=0; i<nums.length; i++){
        if(nums[i]>nums[x]){
            x = x+1
            nums[x]= nums[i]
        }
    }
    return(x+1)
};

// explaination in notebook