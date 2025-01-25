// function lcmBetweenTwo(a,b){
//     while(b!==0){
//         let temp=b;
//         b=a%b;
//         a=temp;
//     }
//     return a;
// }
// function lcm(a,b){
//     console.log((a*b)/gcd(a,b));
// }
// lcm(12,18);
// lcm(5,7);

function lcmBetweenTwo(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a; 
}

function lcm(a, b) {
    const gcd = lcmBetweenTwo(a, b); 
    const lcmValue = (a * b) / gcd; 
    console.log(lcmValue); // Output the LCM
}

// Test the functions
lcm(12, 18); // Expected output: 36
lcm(5, 7);   // Expected output: 35
