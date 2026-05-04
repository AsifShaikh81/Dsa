//* 509. Fibonacci Number
//* top-down approach
/**
 * @param {number} n
 * @return {number}
 */

let dp = {} // store value
var fib = function (n) {
    // base case
    if (n <= 1) {
        return n;
    }
    // Agar dp[n] mein value nahi hai (not computed yet), toh calculate karo
    // this save recalculation, jo already calulate hua hai 
    if (!dp[n]) {
        dp[n] = fib(n - 1) + fib(n - 2);
    }
    return dp[n];
};

//* bottom up approach
var fib = function(n) {
    let dp = [0,1]
    for(let i = 2 ; i <=n;i++){
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};