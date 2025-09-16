// sum of first n number

function sum(n) {
    if (n == 0) return 0  //0 -->false --> loop stop
    return n+ sum(n-1)
}

console.log(sum(5))

// explanation in noteboook 

// sum of all n element in array
function sumArr(n) {

    if (n == 0) return arr[n]  // arr[0]= 0 -->false --> loop stop

        return arr[n] + sumArr(n - 1)
}

let arr = [5, 3, 2, 0, 1]

console.log(sumArr(arr.length-1))