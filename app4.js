// count digit
/* 
function countDigit(num) {
  let count = 0;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}


let result = countDigit(123456);
console.log(result);
 */

// improved version
function countDigit(num) {
  let count = 0;
  //*1) corner case :what if num is zero ?
  if (num == 0) return 1; //*if number is zero return 1
  //*2) corner case :what if numer is neg
  num = Math.abs(num); //* converts neg numbet to positive number

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let result = countDigit(-259);
console.log(result);
