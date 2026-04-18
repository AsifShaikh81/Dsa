// https://www.notion.so/DSA-2933109a4db580b88d46ed534e1c78bc#3443109a4db580ffae5dce5bb04aad24
//*Partition Labels


/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    //1.to store the last occurence of every char
      let last = {} 
      let ans = []
      // loop through string and store the last occurence of chat
      for(let i = 0; i <s.length; i++){
        last[s[i]] = i

      }
      console.log("last:",last)
    //2. create partition
    // start and end pointer help to get the length of partition
    let start= 0
    let end = 0
    for(let i = 0; i<s.length;i++){
        end = Math.max(end, last[s[i]])
        if(i===end){
          ans.push(end-start + 1)
          start = i + 1 // update start 
        }
    }
    return ans 
};