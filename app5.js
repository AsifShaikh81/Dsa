//*palindrome

var isPalindrome = function(x) {
    if(x<0) return false
    let rev = 0
    xCopy = x
    while(x>0){
       let rem = x%10 // -> 123%10 -> gives last digit ->3
        //0 = 10*0 + 3 =>3
        rev = (10*rev) + rem
        x = Math.floor(x/10) // 123/10 gives 12.3 ,so Math.floor removes digit after point and gives 12
    }
    if(rev === xCopy){
    return true
}else{
    return false
}
};


/* why math.floor ?
kyu ki js mein divide karne ke baad value point mein ata hai so to remove that digit after point using math.floor

why xCopy?
we modiying the actual value (121 = 121 ->12.1 )  */

//*reverse integer
/* Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned). 
*/
//* fall in between this(condition)
/* -2^31  →  -2147483648
 2^31 - 1 →  2147483647 */


var reverse = function(x) {
    xCopy = x // creating copy of org num bcz we will change neg num to pos num before entering loop
    
    let rev = 0
      x = Math.abs(x)
    while (x>0){
        last= x%10;
        rev = (10*rev)+last
        x = Math.floor(x/10)

    }
    return (xCopy<0)? -rev:rev
};