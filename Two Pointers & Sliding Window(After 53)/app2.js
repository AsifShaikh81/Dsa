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

//*Find the Index of the First Occurrence in a String  
//*usinf kmp
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
//1)*Buildin lps array
  let n = haystack.length
  let m = needle.length
  let lps=[0]  
  let i =0
  let j =1
  while(j < m){
    // if needla ka i ,j matches , run this condtion
    if(needle[i]===needle[j]){
        lps[j] = i+1
        ++i,++j
    }else{
        if(i===0){
            lps[j]=0
            ++j
        }else{
            i=lps[i-1]
        }
    }
  }

    //2) Checking for the string
    // reseting i and j 
     i= j=0
    // let j =0
    while(i<n){
        if(haystack[i]==needle[j]){
            ++i,++j
        }else {
            if(j===0){
                ++i
            }else{
            j=lps[j-1]
            }
        }
        if(j===m)
        return i-m
    }
 
  return -1
};