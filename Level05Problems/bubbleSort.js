// function Bubble(arr){
//     n=arr.length;
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//         console.log(arr);
        
//     }

// }
// Bubble([1,2,3,4,5,6,7])
function bub(arr){
    if(!Array.isArray(arr) || arr.length === 0){
        console.log("Invalid Argument");
        return;
    }
    let count = 1;
    while(count >0){
        count=0;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
                count++;
            }
        }
        console.log(arr.join(' '));
    }
}
bub([1, 2, 3, 4, 5]); 
function buble(arr) {

    let count = 1;
    while (count > 0) {
        count = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                count++;
            }
        }
        console.log(arr.join(' '));
    }
}



// Selection sort

function Selection(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
        console.log(arr.join(', '))
    }
}
Selection([2,45,87,9,1,23,67])

function Selection(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
        console.log(arr.join(', '))
    }
}
Selection([12,54,67,876,443])