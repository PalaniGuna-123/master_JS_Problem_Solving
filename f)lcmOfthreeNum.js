function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcmThreeNumbers(a, b, c) {
    let lcm_ab = (a * b) / gcd(a, b);
    return (lcm_ab * c) / gcd(lcm_ab, c);
}


console.log(lcmThreeNumbers(4, 5, 6)); 

function gcd1(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a= temp;
    }
    return a;
}
function lcm(a,b,c){
    find_ab=(a*b/gcd1(a,b))
    return (find_ab*c/gcd1(find_ab,c));
}
console.log(lcm(4,2,3));
