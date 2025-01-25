// Given an array of positive integers sorted in ascending order (increasing order, 1st element is the smallest, Nth element is the largest), implement the binary search algorithm.

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1;
        }
    }

    return false;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5)); 