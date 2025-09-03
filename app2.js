//*Second Largest
// Find Second Largest number in an array

function SecondLargestNum(arr) {
  let firstlargest = -Infinity;
  let secondlargest = -Infinity;

  if (arr.length < 2) {
    return "array should have atleast 2 elements";
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstlargest) {
      secondlargest = firstlargest;
      firstlargest = arr[i];
    //   arr[i] != firstlargest --> check for duplicates                             
    } else if (arr[i] > secondlargest && arr[i] != firstlargest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}
let array1 = [4, 9, 0, 2, 8, 7, 1];
let result = SecondLargestNum(array1);
console.log(result);
