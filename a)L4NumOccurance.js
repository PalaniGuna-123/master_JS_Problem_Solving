// Given a array of integers, count of number of occurrences of the maximum element in the array 

// Sample Input: 3 2 1 3

// Sample Output: 2

function countMaxOccurrences(arr) {
    let max = arr[0]; 
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; 
            count = 1; 
        } else if (arr[i] === max) {
            count++; 
        }
    }

    return count;
}

const array = [3, 2, 1, 3];
console.log(countMaxOccurrences(array));

function findMaxRepeatNum(arr){
    let max=arr[0];
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            count=1

        }
        else if(arr[i]===max){
            count++
        }
        
    }
    console.log(count);
    
}
findMaxRepeatNum([1,2,3,4,4,5,5,5]);