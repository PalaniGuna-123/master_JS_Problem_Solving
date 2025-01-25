function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j] , arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage:
let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort: ", bubbleSort(array1));

function year(arr) {
    let swapped;
    do {
        swapped = false; 
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
              
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; 
            }
        }
    } while (swapped); 
    return arr
}
console.log(year([64, 34, 25, 12, 22, 11, 90]));



