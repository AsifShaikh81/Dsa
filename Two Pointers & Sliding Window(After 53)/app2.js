//392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i= 0
    let j = 0
    while(j< t.length){
        if(s[i]==t[j]){
            ++i
        }
        ++j

    }
    return i == s.length
};
//*Find the Index of the First Occurrence in a String  
//*https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n =  haystack.length
    let m = needle.length
    for(i =0 ; i<=n-m ; i++){
        let j
        for(j=0 ; j<m ; j++){
            if(haystack[i+j]!==needle[j]){
            break
            }
        }
     if(j==m) return i
    }
    return -1
};
