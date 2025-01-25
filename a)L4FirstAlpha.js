function findFirstAlphabetically(arr) {
    if (arr.length === 0) return null; 

    let firstString = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < firstString) {
            firstString = arr[i]; 
        }
    }

    return firstString;
}

let string = ["banana", "apple", "cherry", "date","apricot"];
console.log(findFirstAlphabetically(string));

function firstAlpha(arr){
    if(arr.length===0){
        console.log("Array is empty");
    }
    let first=arr[0];
    for(let i=1;i< arr.length;i++){
        if(arr[i] < first){
            first=arr[i];
        }
    }
    console.log(first);
}
firstAlpha(["apple","banana","cherry","apricot"])


function firstAlphas(arr){
    if(arr.length===0){
        console.log("array is empty");
        
    }
    let first=arr[0]
    for(i=1;i<arr.length;i++){
        if(arr[i]<first){
            first=arr[i];
        }
    }
    console.log(first);
}
firstAlphas(["aaple","apricot","fog"])

function firstAl(arr){
    if(arr.length===0) return null;
    let first=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<first){
            first=arr[i];
        }
        
    }
    console.log(first);
    
}
firstAl(["apple","apricot","fog"])