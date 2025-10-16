// https://leetcode.com/problems/group-anagrams/submissions/1803541591/
//49. Group Anagrams
// approach-1

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let map = {}; // create a object(map)
      for (let i = 0; i < strs.length; i++) {
        // create a sorted string , use this sorted str as a key 
          let sortedStr = strs[i].split("").sort().join(""); 
        // if no sorted key in map add it 
          if (!map[sortedStr]) {
              map[sortedStr] = [strs[i]];
        // if sorted key present push its original value
          } else {
              map[sortedStr].push(strs[i]);
          }
      }
        // return grouped anagaram
      return Object.values(map);
};

//approach-2
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
     let map = {};
  
      for (let i = 0; i < strs.length; i++) {
          let freqArr = Array(26).fill(0);
          let s = strs[i];
  
          for (let j = 0; j < s.length; j++) {
              let index = s[j].charCodeAt(0) - 'a'.charCodeAt(0);
              freqArr[index]++;
          }
  
          let key = "";
          for (let k = 0; k < 26; k++) {
              key += "#" + freqArr[k];
          }
  
          if (!map[key]) {
              map[key] = [s];
          } else {
              map[key].push(s);
          }
      }
  
      return Object.values(map);
};