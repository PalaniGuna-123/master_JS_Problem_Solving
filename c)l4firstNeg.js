// Traverse the array and return the index of the first negative number encountered.
function findFirstNegative(arr) {
    // Traverse the array to find the first negative number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return i; // Return the index of the first negative number
        }
    }

    return -1; // Return -1 if no negative number is found
}

let arr = [3, 5, -2, 7, -8];
console.log(findFirstNegative(arr)); // Output: 2


function early(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            return i;
        }
    }
    return -1
}
console.log(early([3, 5, 2, 7, -8])
);
