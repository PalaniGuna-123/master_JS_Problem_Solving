function factorial(num){
    if (num ===0 || num===1) return 1;
    let fact=1;
    for(let i=2;i<=num;i++){
        fact*=i;
    }
    return fact;
}
function sumOffac(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=factorial(i);
    }
    console.log(sum); 
}
sumOffac(4);

function factorial(num){
    if(num===0 || num===1) return 1;
    let fact=1;
    for(let i=2;i<=num;i++){
        fact*=i;
    }
    return fact;
}
function sumOf(n){
    let tot=0;
    for( let i=1;i<=n;i++){
        tot+=factorial(i);
    }
    console.log(tot);
    
}
sumOf(4);
