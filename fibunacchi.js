function fibonacci(n) {
    if (n === 1) return 0; 
    if (n === 2) return 1; 

    let a = 0, b = 1, fib;
    for (let i = 3; i <= n; i++) {
        fib = a + b; 
        a = b;       
        b = fib;     
    }
    return fib;
}

console.log(fibonacci(1)); 
console.log(fibonacci(4)); 
console.log(fibonacci(6));
console.log(fibonacci(2));


function fibu(n){
    if(n==1)return 0;
    if(n==2)return 1;
    let a=0, b=1, fib;
    for(let i=3;i<=n;i++){
        fib=a+b;
        a=b;
        b=fib;
    }
    return fib;

}
console.log(fibu(4));


function fibuna(n){
    if(n===1) return 0;
    if(n===2) return 1;
    let a=0, b=1, temp;
    for(i=3;i<=n;i++){
        temp=a+b;
        a=b;
        b=temp
    }
    return temp;
}
console.log(fibuna(5));

function fibunac(n){
    let a=0,  b=1, temp; 
    for(i=1;i<=n;i++){
        console.log(a); 
        temp=a+b;
        a=b;
        b=temp;
    }
}
fibunac(5)