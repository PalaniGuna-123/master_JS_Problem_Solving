// Find the index of the first maximum in the array. for eg arr = [4, 5, 1, 2, 5, 3] index is 1.
function firstMaximum(arr){
    max=arr.length[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        
    }
   
    
}
function firstMaximum(arr) {
    if (arr.length === 0) {
        console.log(-1); 
    }

    let max = arr[0]; 
    let maxIndex = 0; 

    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > max) {
            max = arr[i]; 
            maxIndex = i; 
        }
    }

    console.log(maxIndex);
}

firstMaximum([4, 5, 1, 2, 5, 3]); 
firstMaximum([10, 20, 30, 40, 50]); 
firstMaximum([5, 5, 5, 5]);         
firstMaximum([]);                  

function kite(arr){
    let max=arr[0];
    let lastindex=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            lastindex=i;
        }
    }
    console.log(lastindex);
    
}
kite([4, 5, 1, 2, 5, 3])
