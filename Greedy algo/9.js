// 1094. Car Pooling
// https://leetcode.com/problems/car-pooling/description/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, carCapacity) {
  let location = new Array(1001).fill(0)  
  //track passenger pickup and dropoff
  for(let i =0;i<trips.length;i++){
    let [passenger , from, to ] = trips[i]
    // Pickup -> At "location[from]"th index add 'passenger'
    location[from] = location[from] + passenger
    // dropoff -> At "location[to]"th index remove 'passenger'
    location[to] = location[to] - passenger
  }
 
 let usedCapacity = 0
 for(let i = 0 ; i< 1001 ; i++){
    usedCapacity = usedCapacity + location[i]
    if(usedCapacity>carCapacity){
        return false
    }
 }
 return true

};