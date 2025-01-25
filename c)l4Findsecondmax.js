// function findSecondMaximum(arr) {
//     if (arr.length < 2) return null; // Not enough elements

//     let max = -Infinity;
//     let secondMax = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             secondMax = max; // Update second max
//             max = arr[i];    // Update max
//         } else if (arr[i] > secondMax && arr[i] < max) {
//             secondMax = arr[i];
//         }
//     }

//     return secondMax === -Infinity ? null : secondMax;
// }

// // Example usage:
// let numbers = [4, 2, 7, 1, 9, 8];
// console.log(findSecondMaximum(numbers)); // Output: 7
function findSecondMaximum(arr){
    // if(arr.length<2){
    //     console.log(null);
        
    // }
    let max=-Infinity;
    let secondmax=-Infinity;
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondmax=max;
            max=arr[i]
        }
        else if(arr[i]>secondmax && arr[i]<max){
            secondmax=arr[i]
        }

    }
    console.log(secondmax===-Infinity?null:secondmax);
    


}
// // daddyo([])
// // daddyo([1])
// daddy0([1,4,7,62,3])
findSecondMaximum([1,2,3,4,5])
function juice(arr){
    max=-Infinity;
    secondmax=-Infinity;
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondmax=max
            max=arr[i];
            
        }
        else if(arr[i]>secondmax && arr[i] < max){
            secondmax=arr[i];
        }
    }
    console.log(secondmax===Infinity?null:secondmax);
    
}
juice([1,2,3,4,5])