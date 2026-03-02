// heap sort

let arr = [1,4,10,5,26,73,99,0,-1,-8,3,7,9,2]

function heapSort(arr) {
    let n = arr.length
    // create max heap
    // to ignore lead node do -> n/2 
    //  Math.floor(n/2) -> gives lower bound
    for (let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapifyDown(arr , i, n)
    }
    //sort array
    for (let i = n - 1; i > 0; i--){
        // here i is the last index n-1 ,7-1 = 6 
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapifyDown(arr, 0, i)
        
    }
    return arr
}


function heapifyDown(arr , i , n) {
    let largest = i // assume it i is largest 
    let leftChildIndex = (2 * i) + 1 
    let rightChildIndex = (2 * i) + 2

// if left child is greater store left child index
    if (leftChildIndex < n &&arr[leftChildIndex] > arr[largest]) {
        largest = leftChildIndex
    }
// if right child is greater store right child index
    if (rightChildIndex < n && arr[rightChildIndex] > arr[largest]) {
        largest = rightChildIndex
    }
// if largest is not equal to i than u got largest elm, swap it 
    if (largest != i) {

        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapifyDown(arr,largest, n) // swap karo tab tak jab tak property satisfy nahi karta
    }
}

const res = heapSort(arr)
console.log(res)