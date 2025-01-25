function circularShiftRight(arr){
    if(arr.length === 0) return;
    let lastELement = arr[arr.length -1];

    for(let i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1];
    }
    arr[0]=lastELement;
        let result="";
        for(let i=0;i<arr.length;i++){
            result+=arr[i]+" ";
        }
        console.log(result);

    }
circularShiftRight([1,2,3,4 ])
function right(arr){
    if (arr.length===0){
        return false;
    }
    let lastElement=arr[arr.length-1];
    for(let i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1]
    }
    arr[0]=lastElement;
    let result="";
    for(let i=0;i<=arr.length;i++){
        result+=arr[i]+" ";
    }
    console.log(result);
    
}
right([1,2,3,4])

function lArray(arr){
    let sum="";
    if(arr.length===0) return false;
    let last=arr[arr.length-1];
    for(i=1;i<arr.length;i++){
        sum+=i+" "
    }
    console.log(last+" "+sum);
}
lArray([1,2,3,4,5,6])

function zebra(arr){
    let sum=""
    if(arr.length===0){
        return false;
    }
    let last=arr[arr.length-1];
    for(i=1;i<arr.length;i++){
        sum+=i+" "
    }
    console.log(last+" "+sum);
}
zebra([1,2,3,4,5])

function lion(arr){
    let str="";
    if(arr.length===0) return false;
    let last=arr[arr.length-1];
    for(i=1;i<arr.length;i++){
        str+=i+" ";
    }
    console.log(last+" "+str);
}
lion([1,2,3,4])

function circularShiftRight(arr){
    let str="";
    if(arr.length===0) return false;
    let last =arr[arr.length-1];
    for(i=1;i<arr.length;i++){
        str+=i+" ";
    }
    console.log(last+" "+str);
    

}
circularShiftRight([1,2,3,4])

function upper(arr){
    let str="";
    if(arr.length===0) return false;
    let last=arr[arr.length-1];
    for(let i=1;i<arr.length;i++){
        str+=i+" "
    }
    console.log(last +" "+str);
    
}
upper([1,2,3,4])