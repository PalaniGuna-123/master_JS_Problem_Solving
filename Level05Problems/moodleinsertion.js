function insertion(arr){
    let target=arr[arr.length-1]
    let index=arr.length-2
    while(index>=0 && target<arr[index]){
        arr[index+1]=arr[index]
        console.log(arr.join(" "));
        index--;
        
    }
    if(index!=arr.length-1){
        arr[index+1]=target;
    }
    console.log(arr.join(" "));
    
}
insertion([1,2,4,5,3])