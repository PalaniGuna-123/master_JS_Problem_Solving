function hasOdd(arr){
    let count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++;
        }
    }
    if(count%2!==0){
        console.log("Yes");
        
    }
    else{
        console.log("No");
        
    }
}
hasOdd([1,3,5,7])

function hasOddCount(arr){
    let count=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            count++;
        }
    }
    if(count%2!==0){
        console.log("yes");
        
    }
    else{
        console.log("no");
        
    }
}
hasOddCount([2, 4, 6, 8, 10])
hasOddCount([1, 2, 3, 4, 5])