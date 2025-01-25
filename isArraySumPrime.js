function isArraySumPrime(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    if(isPrime(sum)){
        console.log("yes");
        
    }
    else{
        console.log("no");
        
    }
}
function isPrime(n){
    if(n<=1){
        return false;
    }
    for(let i=2 ; i<=Math.sqrt(n) ; i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
isArraySumPrime([1,2,4]);
isArraySumPrime([3,5,7,11]);
isArraySumPrime([]);


