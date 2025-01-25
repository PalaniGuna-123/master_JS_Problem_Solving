// Given an array find all the values less than 15 in a new array if not print No Element less than 15. 
//  Example if arr = [4, 15, 8, 25, 30] output is 4, 8. if ar = [19, 89, 90, 18] output No element less than 15
// function doctor(arr){
//     let str="";
//     for(let i=0;i<=arr.length;i++){
//         if(arr[i]<15){
//             str+=arr[i]+" "
//         }
        
//         if(arr[i]>15){
//            console.log("no");
           
//         }
       

//     }

//     console.log(str); 
//     // console.log("no");
    

// }
// doctor([4, 15, 8, 25, 30])
// doctor([19, 89, 90, 18])

function lessThanSum(arr){
    let result=[];
    for(i=0;i<arr.length;i++){
        if(arr[i]<15){
            result.push(arr[i])
        }
    }
    if(result.length>0){
        console.log(result.join(", "));
        
    }
    else{
        console.log("No element less than 15");
        
    }
}
lessThanSum([4, 15, 8, 25, 30])
lessThanSum([19, 89, 90, 18])

function lessthen(arr){
    let result=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]<15){
            result.push(arr[i])
        }
    
    }
    if(result.length>0){
        console.log(result.join(", "));
        
    }
    else{
        console.log("no element");
        
    }
}
lessthen([4, 15, 8, 25, 30])
