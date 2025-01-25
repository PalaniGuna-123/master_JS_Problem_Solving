// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(num){
    for(i=1;i<=num;i++){
    if(i%5===0 && i%3===0){
        console.log("FizzBuzz");
        
    }
    else if(i % 5===0 ){
        console.log("Buzz");
        
    }
    else{
        console.log(i);
        
    }
}

}
fizzBuzz(20);

function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            console.log(false);
            
        }
    }
    return true;
}
console.log(isPrime(7));
