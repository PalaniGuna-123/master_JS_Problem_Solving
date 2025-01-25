// Print the inverse pattern. for n = 3,

// 333333

// 22    22

// 1        1

// For example:

// Test	Result
// printPattern(2);
// 2222
// 1  1
// printPattern(3);
// 333333
// 22  22
// 1    1
// function printPattern(n){
//     for(let i=1;i<=n;i++){
//         let str="";
//         for(let j=1;j<=i;j++){
//             str+=i
//         }
//         for(let k=1;k<=(n-i)*2;k++){
//             str+=" ";
//         } 
//     }
//     console.log(str);  
    
// }
// printPattern(3);

function calculate(purchases, cities, targetCity) {
    let total = 0;
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].toLowerCase() === targetCity.toLowerCase()) {
            total += purchases[i];
        }
    }
    console.log(total);
}
calculate([100, 200, 300, 100, 10, 300],
    ["chennai", "bangalore", "hyderabad", "chennai", "chennai", "bangalore"],
    "bangalore");