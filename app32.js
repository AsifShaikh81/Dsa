// https://leetcode.com/problems/reverse-string-ii/description/
// 541. Reverse String II
// Approach - two pointer
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("") // convert string to array 

    // outer loop will run less than strings length and jump 2k step ahead
    for(let x= 0; x < s.length; x =x+(2*k)){
      // inner loop run less than mid, swap element and make sure to jump 2k step ahead for next swap
      let mid = Math.floor(k/2) //k = 2  2/2 = 1
      for(let i = 0 ; i<mid ; i++){
        let temp = s[x+i]
       s[x+i] = s[x+k-1-i]
        s[x+k-1-i] = temp
      }

    }
    return s.join("")
};