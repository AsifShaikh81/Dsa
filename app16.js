// bubble sort
/* 
function bubbleSort(arr) {
    let n = arr.length
    
    for (let i = 0; i < n - 1; i++){
        let isSwapped = false
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp

                isSwapped = true
            }
        }
        if(!isSwapped) break
    }
    return arr
}

let array1 = [5, 4, 9,1, 0]
let result1 = bubbleSort(array1)

console.log(result1) */

//

// selection sort
function selectionSort(a) {
    let n = a.length
    
    for (let i = 0; i < n; i++){
        let min = i;
        for (let j = i+1; j < n; j++){
            if (a[j] < a[min]) {
                min = j
            
            }
        }
        // this condition is applying bcz it should not swap with itself , ye conditon optional hai 
        if (min != i) {
            let temp = a[i]
            a[i] = a[min]
            a[min]=temp
        }
    }
    return a
}

let array2 = [100,70,80,90]
let result2 = selectionSort(array2)

console.log(result2)

// insertion sort


function insertionSort(a) {
    let n = a.length
    for (let i = 1; i < n; i++){
        let curr = a[i] // current element from array
        let prev = i - 1 // prev element 
        while (a[prev] > curr && prev >= 0) {
            a[prev + 1] = a[prev]
            prev--
        }
        a[prev+1]=curr
    }
    return a
}

let array3 = [5,4,3,-10,2,1,0]
let result3 = insertionSort(array3)

console.log(result3)