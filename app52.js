/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
     let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        // if pair exist on left
        if (arr[m] === arr[m - 1]) {
            
            let leftCount = m - l;
            if (leftCount % 2 === 1) {
                r = m - 2;
            } else {
                l = m + 1;
            }
            // if pair exist on right
        } else if (arr[m] === arr[m + 1]) {
            let leftCount = m - l;
            if (leftCount % 2 === 1) {
                r = m - 1;
            } else {
                l = m + 2;
            }
        } else {
            return arr[m];
        }
    }
    return arr[l];
};