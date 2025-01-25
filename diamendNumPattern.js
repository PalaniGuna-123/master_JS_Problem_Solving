// function printStar(n){
//     for(let i=1;i<=n;i++){
//         let output=getSpaces(n-i);
//         let pattern=getNumSeq(i);
//         console.log(output+pattern);
        
//     }
//     // Reverse print
//     for(let i=n-1;i>=1;i--){
//         let output=getSpaces(n-i);
//         let pattern=getNumSeq(i);
//         console.log(output+pattern);
        
//     }
// }
// function getSpaces(n){
//     let outputStr="";
//     for(let i=1;i<=n;i++){
//         outputStr+=" ";
//     }
//     return outputStr
// }

// function getSpaces(n){
//     let outputStr="";
//     for(let i=1;i<=n;i++){
//         outputStr+=i+ " ";
//     }
//     return outputStr;
// }
// printStar(2)


function pattern(n){
    //upper
  
    for(i=1;i<=n;i++){
        let str="";
        let gap="";  
        for(j=1;j<=i;j++){
          str+=i+" ";
        }
        for(let k=0;k<n-i;k++){
            gap+=" ";
        }
        console.log(gap+str);
    }
    for(i=n-1;i>=1;i--){
        let str="";
        let gap="";  
        for(j=1;j<=i;j++){
          str+=i+" ";
        }
        for(let k=0;k<n-i;k++){
            gap+=" ";
        }
        console.log(gap+str);
    }
}
pattern(2);
function dia(n){
    for(i=1;i<=n;i++){
        row="";
        for(j=1;j<=n-i;j++){
            row+=" ";
        }
        for(k=1;k<=i;k++){
            row+=i+" ";
        }
        console.log(row);
        
    }
    for(i=n-1;i>=1;i--){
        row="";
        for(j=1;j<=n-i;j++){
            row+=" ";
        }
        for(k=1;k<=i;k++){
            row+=i+" ";
        }
        console.log(row);
        
    }
}
dia(3);
function dia(n){
    for(i=1;i<=n;i++){
        row="";
        for(j=1;j<=n-i;j++){
            row+=" ";
        }
        for(k=1;k<=i;k++){
            row+=" *";
        }
        console.log(row);
        
    }
}
dia(5)