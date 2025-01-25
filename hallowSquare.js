// function hallow(n){
//     let outputStr ="";
//     if(n==1){
//         console.log(1);
//         return;     
//     }
//     for(let i=1;i<=n;i++){
//         outputStr+="1 "
//     }
//     console.log(outputStr.trim());
//     for(let j=2;j<=n-1;j++){
//         let line="";
//         for(let k=1;k<=n;k++){
//             if(k==1 || k==n){
//                 line+="*";
//             }
//             else{
//                 line+=" ";
//             }
//         }
//         console.log(line.trim());
        
//     }
//     outputStr="";
//     for(let i=1;i<=n;i++){
//         outputStr+=n+" ";
//     }
//     console.log(outputStr.trim());
    
// }
// hallow(4);

function hello(n){
    if(n===1){
        console.log(1);
        return;
    }
    let str="";
    for(let i=1;i<=n;i++){
        str+="1 "
    }
    console.log(str.trim())
    for(let j=2;j<=n-1;j++){
        let line="";
        for(k=1;k<=n;k++){
            if(k===1 || k===n){
                line+="* "
            }
            else{
                line+="  "
            }
        }
        console.log(line.trim());
        
    }
    str="";
    for(let i=1;i<=n;i++){
        str+=n +" "
    }
    console.log(str.trim());  
}
hello(5)
function hallow(n) {
    if (n === 1) {
        console.log(1);
        return;
    }

    // Top row
    let outputStr = "";
    for (let i = 1; i <= n; i++) {
        outputStr += "1 ";
    }
    console.log(outputStr.trim());

    // Middle rows (hollow part)
    for (let j = 2; j <= n - 1; j++) {
        let line = "";
        for (let k = 1; k <= n; k++) {
            if (k === 1 || k === n) {
                line += "* ";
            } else {
                line += "  "; // Add two spaces for hollow effect
            }
        }
        console.log(line.trim());
    }

    // Bottom row
    outputStr = "";
    for (let i = 1; i <= n; i++) {
        outputStr += n + " ";
    }
    console.log(outputStr.trim());
}

// Test the function
hallow(5);
