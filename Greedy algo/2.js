//* Assign Cookies
// https://leetcode.com/problems/assign-cookies/editorial/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // sort 
    s.sort((a,b)=>(a-b))
    g.sort((a,b)=>(a-b))

    let i = 0 
    let j = 0
    while(j < s.length){
        if(s[j]>=g[i]){
            i++
        }
        j++
    }
    return i
};

//*Lemonade Change
// https://leetcode.com/problems/lemonade-change/description/
var lemonadeChange = function(bills) {
    // wallet[0] = for '5' , wallet[1] = for '10'
    let wallet = [0,0]
    for (let i =0; i<bills.length;i++){
    // if 5 dollar
    if(bills[i] == 5){
        ++wallet[0] // inc count of 5 dollar by 1

    }
    // if 10 dollar
    else if(bills[i]===10){
        ++wallet[1] // inc count of dollar 10 by 1 
        --wallet[0] // dec count of dollar 5 by  1 
    }
    //if 20 dollar
    else if(bills[i] == 20){
        // if 10 dollar exist 
        if(wallet[1]){
            --wallet[1]
            --wallet[0]
        }else{
            wallet[0] =wallet[0] - 3
        }
    }
        // if no 5 dollar 
        if(wallet[0]<0) return false

    }
    // if u able to give all changes to customer return true
    return true
};