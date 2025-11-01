// Rotting Oranges
// https://namastedev.com/learn/namaste-dsa/rotting-oranges
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = []
    let m = grid.length // row 
    let n = grid[0].length // column 
    
    //if rotten oranges push it in queue
    for(let i = 0 ; i<m ; i++){
        for(let j=0 ; j<n ; j++){
            if(grid[i][j]===2){
                queue.push([i,j,0])
            }
        }
    }
    
    // mark fresh orange to rotten 
    let MaxMinutes = 0 
   while(queue.length){
    // level will increse by 1 at every itration , level is used to calulate minutes
        let [x,y,level] = queue.shift() // pop 
        //left
        if( x>0 && grid[x-1][y]===1){
            grid[x-1][y] =2
            queue.push([x-1,y,level+1])
        }
        //right
        if( x<m-1 && grid[x+1][y]===1){
            grid[x+1][y] =2
            queue.push([x+1,y,level+1])
        }
        // bottom
        if(y<n-1 && grid[x][y+1]===1){
            grid[x][y+1] =2
            queue.push([x,y+1,level+1])
        }
        //top
        if(y>0 && grid[x][y-1]===1){
            grid[x][y-1] =2
            queue.push([x,y-1,level+1])
        }
        MaxMinutes = Math.max(level,MaxMinutes)
    }
    // traverse through whole array if 1=> fresh than return -1 otherwise return minutes  
     for(let i = 0 ; i<m ; i++){
        for(let j=0 ; j<n ; j++){
            if(grid[i][j]===1){
                return -1
            }
        }
    }
  return MaxMinutes
};