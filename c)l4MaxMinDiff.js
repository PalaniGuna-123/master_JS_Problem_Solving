// 2. Print the Difference Between the Maximum and Minimum Element in an Array
function diffMaxMin(arr){
    min=arr[0]
    max=arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
        
    }
    if(arr[i]>max){
        max=arr[i]
    }
    diff=max-min;

}
console.log(diff);

}
diffMaxMin([2,3,1,4,5,6,7,8,9])