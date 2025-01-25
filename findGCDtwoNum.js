function gcd(a,b){
    let c=a<b ? a:b;
    let res=1;
    for(i=2;i<=c;i++){
        if(a%i===0 && b%i === 0){
            res=i;
        }
    }
    console.log(res);
}
gcd(10,30)
gcd(24,18)

function gcd2(a,b){
    while(b!==0){
        temp=b;
        b=a%b;
        a=temp;
    }
    console.log(a);
    
}
gcd2(10,30)