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

let array = [5, 4, 9,1, 0]
let result = bubbleSort(array)

console.log(result) */

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

let array = [100,70,80,90]
let result = selectionSort(array)

console.log(result)

