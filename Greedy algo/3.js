//https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
//*Best Time to Buy and Sell Stock - II

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0 
    
    for(let i = 1;  i<prices.length; i++){
       let profit = prices[i] - prices[i-1]
       if(profit>0){
        ans = ans + profit
       }
    }
};