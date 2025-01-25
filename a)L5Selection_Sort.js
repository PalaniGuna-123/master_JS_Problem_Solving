function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // Find the minimum element in the unsorted part
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// Example usage:
let array2 = [64, 25, 12, 22, 11];
console.log("Selection Sort: ", selectionSort(array2));
