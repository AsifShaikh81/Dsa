//reverse string

var reverseString = function(s) {
    let len = s.length
    let halflen = Math.floor(len/2)

    for (i=0;i<halflen;i++){
        let temp = s[i]
        s[i]= s[len-1-i]
        s[len-1-i]=temp
    }
};

// buy and sell stocks
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0]
    let maxProfit =0
    for (i=1 ; i<prices.length;i++){
        if(prices[i]-min>maxProfit){
            maxProfit = prices[i]-min
        }
        if(prices[i]<min){
            min = prices[i]
        }
    }
    return maxProfit
};