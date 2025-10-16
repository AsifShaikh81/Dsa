// https://leetcode.com/problems/valid-anagram/
//242. Valid Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = {} // creating map
  // add 's'-string in the map 
  for(let i=0 ; i<s.length ; i++){
    // if no char in map add it else inc char count by 1
    if(!map[s[i]]){
        map[s[i]]=1
    }else {
        map[s[i]]++
    }
  }

  for(let i=0; i < t.length ; t++)
    // if char is not fount or char count is below zero return false,else dec char count
    if(!map[t[i]] || map[t[i]] <0 ){
        return false
    }else {
        --map[t[i]]
    }
  return true
};