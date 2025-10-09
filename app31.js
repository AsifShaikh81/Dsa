// 3541. Find Most Frequent Vowel and Consonant
//https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/
//Approach - using hashmap
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {} // create a hash map
    // looping through string and adding in 'map' with frequency 
    for(let i=0; i<s.length ; i++){
        if(!map[s[i]]){
            map[s[i]]=1
        }else{
            map[s[i]]++
        }
    }

    let vowels= ['a','e','i','o','u']
    let maxVowels = 0 // to check max vowels
    let maxConsonant = 0 // to check max consonant
    let mapKeys =  Object.keys(map) // getting keys from 'map'
    // looping through mapKeys
    for(let i=0 ;i < mapKeys.length; i++){
        // check for vowels
        if(vowels.includes(mapKeys[i])){
            maxVowels = Math.max(map[mapKeys[i]],maxVowels) // donon mein se jo max rehga wo 'maxVowels' mein store hoga
        }else{
              maxConsonant = Math.max(map[mapKeys[i]],maxConsonant)
        }
    }
    return maxVowels + maxConsonant
};  

//1221. Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let R = 0 
  let L = 0
  let balancedString = 0
  for (let i=0 ; i<s.length ; i++){
    // if r found inc by 1 ,else inc l by 1
    if(s[i]==='R'){
        R++
    }else {
        L++
    }
  
  // if l equal to r inc count by 1 and reset r and l 
  if(L===R){
    balancedString++
    R=L = 0
  }
}
  return balancedString
};