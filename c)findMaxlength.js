// Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"] output is Abraham

function findMaxLen(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>max.length){
            max=arr[i];
        }
    }
    console.log(max);
    
}
findMaxLen(["Ram", "Abraham", "Peter"])


function jungle(arr){
    max=arr[0];
    for(i=0;i<arr.length;i++){
        if(arr[i].length > max.length){
            max=arr[i]
            
            
        }
    }
    console.log(max);
    
}
jungle(["Ram", "Abraham", "Peter"])