// 2942. Find Words Containing Character
//https://leetcode.com/problems/find-words-containing-character/description/
//approach 1 - built in includes method
var findWordsContaining = function(words, x) {
    let res = []
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
        res.push(i)           
        }
    
    }
     return res
};

// approach 2 - nested loop

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let res = [] // empty array to store index
    // outer loop for each word
    for(let i=0;i<words.length;i++){
        //inner loop for each char in word
        for(let j=0;j<words[i].length;j++){
         // if x found in a word push index in empty array and break it 
        if(words[i][j]===x){
        res.push(i)   
        break        
        }
    }
    
    }
     return res
};

// word[i] =  a whole word in array 'leet'
// word[j] =  each char in that particular word

// 771. Jewels and Stones
//Approach 1 - brute force
var numJewelsInStones = function(jewels, stones) {
  let count = 0
  for(let i = 0 ;i<stones.length ; i++){
    for(let j = 0 ; j<jewels.length ; j++){
        if(stones[i] === jewels[j]){
            count ++
            break
        }
    }
  }  
  return count 
};

//Approach 2 - using set/hashmap
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let jset = new Set() // creating new set to add jewels
//   loop through jewels, add it in set
  for (let i=0 ; i<jewels.length;i++){
        jset.add(jewels[i])
  }
    let count = 0 // to count char
    for (let i=0 ; i<stones.length;i++){
        //if jewels set has stones than inc count by 1
       if( jset.has(stones[i])){
        count++
       }
  }
  return count
};