//https://leetcode.com/problems/isomorphic-strings/
// 205. Isomorphic Strings
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
      let mapSToT = {};  // 1st map
      let mapTToS = {}; // 2nd map
  
      for (let i = 0; i < s.length; i++) {
           // if char in s is not in map and char in t is not in map add it
          if (!mapSToT[s[i]] && !mapTToS[t[i]]) {
              mapSToT[s[i]] = t[i]; // maping char in s to t
              mapTToS[t[i]] = s[i]; // maping char in t to s

            //if char in first map not equal to second map or vice vers, than return false(not isomorphic)
          } else if (mapTToS[t[i]] !== s[i] || mapSToT[s[i]] !== t[i]) {
              return false;
          }
      }
  
      return true;
  };