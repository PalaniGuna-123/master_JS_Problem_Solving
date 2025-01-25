// function gcd(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;

// }
// function lcm(a,b){
//     return (a*b/gcd(a,b));
// }
// console.log(lcm(15,20))

function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;   
    }
    return a;
}
function lcm(a,b){  
     return (a*b/gcd(a,b));
}
console.log(lcm(15,20));

function gcd(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
function lcm(a,b){
    return (a*b/gcd(a,b))
}
console.log(lcm(15,20));



function gcd2(a,b){
    while(b!==0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    return a;
}
console.log(gcd2(15,20));

function gcd(a,b){
    while(b!==0){
      let temp=b;
      b=a%b;
      a=temp;
    }
    return a;
}
function lcm(a,b){
    return (a*b/gcd(a,b))
}
console.log(lcm(3,15));
