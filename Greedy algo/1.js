// 029. Two City Scheduling
// https://leetcode.com/problems/two-city-scheduling/
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
 costs.sort((a,b)=>((b[1]-b[0])-(a[1]-a[0])))
 let n = costs.length/2
 let ans = 0
 for(let i =0; i<n; i++){
 ans = ans+costs[i][0]
 ans = ans + costs[i+n][1]
 }
 return ans
};

/* 
After array sorted
costs = [
 [30,200],   // 170
 [10,20],    // 10
 [30,20],    // -10
 [400,50]    // -350
]
 */