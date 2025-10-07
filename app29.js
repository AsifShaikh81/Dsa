//https://leetcode.com/problems/length-of-last-word/description/

//58. Length of Last Word

//* 2 while loop - approach 1
/**
 * @param {string} s
 * @return {number}
 */
 // explained in book pls read it asiffff
var lengthOfLastWord = function(s) {
    let n = s.length -1 
    while(n>=0){
        if(s[n] === " "){
            --n
        }else{
            break
        }
    }
    let count = 0
    while(n>=0){
        
        if(s[n] === " "){
            break
        }
        --n
        ++count

    }
    return count
    
};

//* 1 while loop - approach 2
/**
 * @param {string} s
 * @return {number}
 */
 // explained in book pls read it asiffff
var lengthOfLastWord = function(s) {
   let n = s.length-1
   let count = 0
   while(n>=0){
    if(s[n]!=" "){
        count++
    }else if(count > 0){
        break
    }
    --n
   }
   return count 
    
};