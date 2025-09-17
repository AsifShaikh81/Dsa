// sum of first n number

    function sum(n) {
        if (n == 0) return 0  
        return n+ sum(n-1)
    }

    console.log(sum(5))

// explanation in noteboook 

// sum of all n element in array
function sumArr(n) {

    if (n == 0) return arr[n]  // arr[0]= 0 -->false --> loop stop

        return arr[n] + sumArr(n - 1)
}

// let arr = [5, 3, 2, 0, 1]/

console.log(sumArr(arr.length-1))

// sum of all odd numbber in array
function sumArr(n) {
    let isOdd = ((arr[n] % 2) !=0)
    if (n==0) { 
     return isOdd ? arr[n]:0
    }
   return (isOdd? arr[n] : 0 )+ sumArr(n-1)
}

let arr = [5, 3, 2, 0, 1]

console.log(sumArr(arr.length-1))


// always remeber this 
// check this =>https://chatgpt.com/c/68cad80f-154c-832e-8199-a3cc46d6a9e8
/* Jab tu recursion likhta hai, hamesha ek base case chahiye hota hai jahan recursion ruk jaye.
Yahaan if (n == 0) return 0 wahi base case hai.
Matlab: agar number 0 ho gaya, to aur neeche recursion call mat karo → bas 0 return karo. */

// Ab calculation backward chalegi:

/* overall 
✅ To return 0 ka matlab hai recursion ko stop karna aur ek value dena jisse addition shuru ho sake.
Agar tu yahan return 0 nahi lagata, toh function infinite recursion mein fas jaata aur stack overflow error deta. */

// factorial of n
function product(n) {
    if (n == 1) return 1
    return  n * product(n-1)
}


console.log(product(5))

// power of two
var isPowerOfTwo = function(n) {
 // if n is equal to 1 return 2
  if (n==1) return true 
// else if n is less than 1 or n is odd number than return false
  else if(n<1 || (n%2 !==0)) return false

  return  isPowerOfTwo(n/2)


};

// power of three -> khud se kiya
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n==1) return true 
    else if(n<1 || (n%2 ==0))return false
    return isPowerOfThree(n/3)
};