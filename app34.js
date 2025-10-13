//https://leetcode.com/problems/largest-odd-number-in-string/description/
// 1903. Largest Odd Number in String
/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    // getting last index
    let n = num.length - 1
  // running loop from last index
  for(let i = n ; i >=0 ; i--){
    // check number is odd or not, if odd return number from that point to 0th index
    if(Number(num[i]) % 2 == 1){
     return num.substring(0,i+1)
   }
  }
  // no odd number return ""
  return ""
};


//https://leetcode.com/problems/longest-common-prefix/
var longestCommonPrefix = function(strs) {
    let x = 0; // Start with character index x = 0 (used to compare characters across strings)

    // Loop through each character of the first string
    while (x < strs[0].length) {
        let ch = strs[0][x]; // Get the character at position x from the first string

        // Compare this character with the same position in all other strings
        for (let i = 1; i < strs.length; i++) {
            // If mismatch found OR current string is shorter than x
            if (ch != strs[i][x] || x == strs[i].length) {
                // Return the common prefix found so far (from index 0 to x-1)
                return strs[0].substring(0, x);
            }
            // If match, loop continues and i moves to next string
        }

        ++x; // All strings matched at this position, so check next character
    }

    // If loop completes, entire first string is the common prefix
    return strs[0];
};
