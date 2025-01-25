function printPattern1(n) {
    for (let i = n; i >= 1; i--) {
        let row = "";
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

printPattern1(3);
/* Output:
3 3 3
  2 2
    1
*/
// function newNight(n){
//     for(i=n ;i>0;i--){
//         let str="";
//         for(let j=1;j<=i;j++){
//             str+=i+" ";
//         }
//         for(let k=1;k<=n-i;k++){
//             str+=" "
//         }
//         console.log(str.trim());
        
//     }
// }
// newNight(3)


function pattern(n){
    for(let i=n;i>=1;i--){
        let gap="";
        for(k=1;k<=n-i;k++){
            gap+=" ";
        }
        for(j=1;j<=i;j++){
            if(i%2==0){
            gap+="*"+" ";
            }
            else{
                gap+=i+" ";
            }
        }
        
        console.log(gap);
    }
}
pattern(4);

function dia(n){
    for(i=1;i<=n;i++){
        let row="";
        for(j=1;j<=n-i;j++){
            row+=" ";
        }
        for(k=1;k<=i;k++){
            row+=i+"  ";
        }
        console.log(row);
        
    }
    for(i=n-1;i>=1;i--){
        let row="";
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




let n =5;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === 1 || i === n || j === 1 || j === n) {
            row += i + ' ';
        } else {
            row += '  ';  // Two spaces
        }
    }
    console.log(row);
}




function pattern(n){
    for(let i=1;i<=n;i++){
        let str="";
        if(i===1||i===n){
            for(let j=1;j<=n;j++){
            str+=i+" ";
        }
        }
        else{
        for(let j=1;j<=n;j++){
            if(j===1||j===n){
                str+="* "
            }
            else{
                str+="  "
            }
        }
        }
               console.log(str)    
    }

}
pattern(5)

function pat(n){
    for(let i=1;i<=n;i++){
        let str="";
       if(i===1 || i===n){
        for(let j=1;j<=n;j++){
            str+=i+" ";
        }
       }
       else{
        for(let j=1;j<=n;j++){
            if(j===1 || j===n){
                str+="* "
            }
            else{
                str+="  "
            }
        }

    }
    console.log(str);
    
    }
}
pat(5)

function puriyala(n){
    for(i=1;i<=n;i++){
        let str="";
        if(i===n || i===1){
            for(j=1;j<=n;j++){
                str+=i+" "
            }
        }
        else{
            for(let j=1;j<=n;j++){
                if(j===n || j===1){
                    str+="* "
                }
                else{
                    str+="  "
                }
            }
     
        }
        console.log(str);
    }
    
}
puriyala(4)


