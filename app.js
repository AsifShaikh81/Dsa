//* lec : loop 2
/* Write a function that searches for an
element in an array and returns the index, if
the element is not present then just return —1 */

// function searchElement(array, elem) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == elem) {
//       return i;
//     }
//   }
//   return -1;
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let result = searchElement(arr, 49);
// console.log(result);

// write function that return number of negative number from array 
/* function countNegNum(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count = count + 1;
    }
  }
  return count;
}
let arr = [1, -2, -3, 4, -55, 6];
let result = countNegNum(arr);
console.log(result); */

// Write a function that returns the Largest
// number in an array
// function findlargestnum(arr) {
//     let Largest = -Infinity;
//     for(i=0;i < arr.length; i++){
//         if (arr[i]> Largest) {
//              Largest = arr[i];
//         }
//     }
//     return Largest
// }

// let array1 = [1,2,-3,23,44]
// let result = findlargestnum(array1)
// console.log(result);

function findsmallestnum(arr) {
    let smallest = Infinity;
    for(i=0;i < arr.length; i++){
        if (arr[i]< smallest) {
             smallest = arr[i];
        }
    }
    return smallest
}

let array2 = [50,40,30,20,10]
let result = findsmallestnum(array2)
console.log(result);