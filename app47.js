// https://leetcode.com/problems/sqrtx/submissions/1821439410/
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // if x less than 2 always x will be the answer
    if(x<2) return x

    let l = 2 // left
    let r = Math.floor(x/2) // right
    // loop runs until l is less than r that is l & r is not crossed
    while(l<=r){
        let m = Math.floor((l+r)/2) // middle
        // if x equal to m square return m
        if(x===m**2){
            return m
        }
        // if x is less than m sqaure, move r
        else if(x < m**2){
            r = m-1
        }
        // if x is greater than m sqaure, move l
        else{
            l = m+1
        }
    }
    //if not a perfect square always r will be ans so returning r
    return r
};