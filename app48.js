
// https://leetcode.com/problems/guess-number-higher-or-lower/
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let l = 1 
    let r = n
    while(l <= r){
        let m = Math.floor((l+r)/2)
        let G = guess(m)
        // if guess is equal to pick
        if(G===0){
            return m
        }
        // if guess is higher than pick
        else if(G < 0){
            r = m-1
        // if guess is lower than pick
        }else {
            l = m+1
        }
    }
    
};