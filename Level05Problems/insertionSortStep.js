function insertion(arr){
    if(arr.length==1){
        console.log(arr.toString(''));
    }
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        let j;
        for(j=i-1;j>=0  && arr[j]>temp;j--){
            arr[j+1]=arr[j];
        }
    arr[j+1]=temp;
    console.log(arr.join(" "));

    

    }
}

insertion([1,4,3,5,6,2])

function inser(arr){
    if(arr.length===1){
        console.log(arr.toString(''));
    }
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j;
        for(j=i-1;j>=0 && arr[j]>temp;j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=temp;
        console.log(arr.join(' '));
        
    }
}
inser([1,4,3,5,6,2])

function insertion(arr){
    if(arr.length===0){
        console.log(arr.toString());
    }
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        let j;
        for(let j=i-1;j>=0 && arr[j]>temp;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=temp;
        console.log(arr.join(' '));
        
    }
}
insertion([1,4,6,7,9,4,3,4,5,5])