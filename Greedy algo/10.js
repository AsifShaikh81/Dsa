//  https://namastedev.com/learn/namaste-dsa/candy-two-pass-on-space
//* Candy - Two Pass - O(n) Space
//* approach 1  - two loop

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n = ratings.length
    let ltr = new Array(n).fill(1)
    // left to right
    for(let i = 1; i<n; i++){
        if(ratings[i]>ratings[i-1]){
            ltr[i] = ltr[i-1] + 1 
        }
    } 
    console.log("ltr",ltr)

    // right to left
    let rtl = new Array(n).fill(1)
    for(let i = n-2; i>=0 ;i--){
        if(ratings[i]>ratings[i+1]){
          rtl[i] = rtl[i+1] + 1
        }
    }
        console.log("rlt",rtl)


    //get the max
    let ans = 0
    for(let i = 0 ;i<n; i++){
        ans = ans + Math.max(ltr[i],rtl[i])
    }
    console.log("ans",ans)
    return ans

};

//* approach 1  - 1 loop
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(arr) {
  let n = arr.length
  let ans = n // store the final ans
  let i = 1 
  while(i<n){
    // same
    if(arr[i]==arr[i-1]){
        ++i
        continue
    }
    // increasing
    let up =0
    while(i<n&& arr[i]>arr[i-1]){
        ++up
        ans = ans + up
        ++i
    }
    //decreasing
    let down =0
     while(i<n&& arr[i]<arr[i-1]){
        ++down
        ans = ans + down
        ++i
    }
    //remove lesser value at peak ans keep greater value
    ans = ans - Math.min(up,down)

  } 
  return ans
};