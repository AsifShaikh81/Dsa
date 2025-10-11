
// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/description/
// Approach - two pointer (extra space used)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s= s.toLowerCase() // converting to lowercase
    let filteredStr = "" // initialize with empty string
    let rev = "" // init with empty str
    for (let i=0 ; i< s.length; i++){
        // if each char in string matches this regex than only filter and reverse it 
        if(s[i].match(/[a-z0-9]/i)){
            filteredStr = filteredStr + s[i] // appending string at right hand side
            rev =  s[i] +rev // appending string at left hand side
        }
    }
    console.log(filteredStr)
     // check filteredStr equal to rev or not and returning
    return filteredStr === rev
    
};

//approach 2 - two pointer (extra space not used)
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s =  s.toLowerCase()
    let i=0 // start of the index
    let j= s.length - 1 // last index
   // loop will run till i and j is not crossed , if crossed loop will stop
    while(i<j){
        // if regex not match moving i and j according to situation
        if(!s[i].match(/[a-z0-9]/i)){
            i++ // inc i 
        }else if(!s[j].match(/[a-z0-9]/i)){
            j-- // dec j
        // if s[i] equal to s[j] moving i and j according to situation
        }else if(s[i]===s[j]){
            i++
            j--
        // if above case not match else the string is not palindrome
        }else {
            return false
        }
    }
    // i and j crossed means whole string checked ,a string is palindrome return true 
    return true
};