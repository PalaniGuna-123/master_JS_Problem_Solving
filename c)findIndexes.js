// 2. Problem: Given an array of integers and a target element, find the indices of its first and last occurrence.

// Example Input: ([5, 2, 3, 5, 7, 5, 8], 5)
// Example Output: { firstIndex: 0, lastIndex: 5 }

function indices(arr,target){
    let dummy=[];
    for(i=0;i<arr.length;i++
    ){
        if(arr[i]===target){
          dummy.push(i)
        }
    }
   if(arr.length===0){
    console.log(`first index${-1}  last index${-1}`);
    
   }
    let gun=dummy[0];
    let bun=dummy[dummy.length-1]
   
   console.log(`first index ${gun}  last index${bun}`);
   
}
indices([5, 2, 3, 5, 7, 5, 8], 5)


function daily(arr,value){
    let guna=[]
    for(let i=0;i<=arr.length;i++){
        if(arr[i]===value){
            guna.push(i)

        }
        gun=guna[0]
        g=guna[guna.length-1]
    }
    console.log(`first index${gun}`);
    
}