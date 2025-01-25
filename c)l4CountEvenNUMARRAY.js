// 1. Problem: Given an array of integers, count how many numbers are even and how many are odd.

// Example Input: [1, 2, 3, 4, 5, 6]
// Example Output: { even: 3, odd: 3 }

function arrayOfInt(arr){
    count=0;
    guna=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            count++;
        }
        else{
            guna++
        }
    }
    console.log(`even${count}, Odd ${guna}`);
    
}
arrayOfInt([1, 2, 3, 4, 5, 6])