function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;

}
function lcm(a,b){
    console.log((a*b)/gcd(a,b));
    
}
lcm(12,18);
lcm(5,7);