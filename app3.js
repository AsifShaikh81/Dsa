// 1)star pattern
/* let n = 4;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row += "*";
  }
  console.log(row);
} */
/* 
Output
* * * *
* * * *
* * * *
* * * *
*/

/* 
Pattern 2: Right-Angled Star Triangle
Print a right-angled triangle of stars with n rows.
 */
/* let m = 4;
for (let i = 0; i < m; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += "*";
  }
  console.log(row);
} */

/* 
Output
*
* *
* * *
* * * *
*/

//Pattern 3: Print a Right-Angled Number Triangle
// Write a program that prints a right-angled triangle of numbers of heightn.

/* let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row += (j + 1);
  }
  console.log(row);
} */
/* Output
1
1 2
1 2 3
1 2 3 4 */

/* Pattern 4: Print a Right-Angled Triangle of Repeated Numbers
Write a program that prints a right-angled triangle where each row contains the same number repeated.

Output
1
2 2
3 3 3
4 4 4 4 */

/* let n = 4;
for (i = 0; i < n; i++) {
  // --------------------------❌----✅
  let row = ""; // break line 12233-----1
  // ---------------------------------- 22
  // ---------------------------------- 333
  for (j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}
 */

/* Pattern 5: Print a Reverse Right-Angled Triangle of Increasing Numbers
Write a program that prints a reverse right-angled triangle where each row starts from 1 and the number of elements decreases with each row.

Output
1 2 3 4
1 2 3
1 2
1 */

/* let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row += j + 1;
  }
  console.log(row);
} */

/* Pattern 7: Print a Right-Angled Triangle of Alternating 1s and 0s
Write a program that prints a triangle of alternating 1s and 0s starting with 1 on each row.

Output
1
1 0
1 0 1
1 0 1 0 */

/* let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
} */

/*   Pattern 8: Right-Angled Triangle of Alternating 1s and 0s (Global Toggle)
Write a program to print a triangle of alternating 1s and 0s, but the toggle continues globally across rows.

Output
1
0 1
0 1 0
1 0 1 0 */

let toggle = 1;
let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += toggle;
    toggle = toggle === 1 ? 0 : 1;
  }
  console.log(row);
}
