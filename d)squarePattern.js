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


function sq(n){
    for(let i=1;i<=n;i++){
        let row="";
        for(j=1;j<=n;j++){
            if(i===1||i===n||j===1||j===n){
                row+=i+" ";
                
            }
            else{
                row+="  ";
            }
        }
        console.log(row);
        
    }
}
sq(8);

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


function dia(n){
    for(i=1;i<=n;i++){
        let row="";
        for(j=1;j<=n-i;j++){
            row+=" ";
        }
        for(k=1;k<=i;k++){
            if(i%2!==0){
                row+="*"+" ";
                }
                else{
                    row+="# "
                }
        }
        console.log(row);
        
    }
    for(i=n-1;i>=1;i--){
        let row="";
        for(j=1;j<=n-i;j++){
            row+=" ";
        }
        for(k=1;k<=i;k++){
            if(i%2!==0){
            row+="*"+" ";
            }
            else{
                row+="# "
            }
        }
        console.log(row);
        
    }
}
dia(1);
//Right Angle triangle
function tri(n){
    for(i=1;i<=n;i++){
        let gap="";
        for(j=1;j<=n-i;j++){
            gap+="";
        }
        for(k=1;k<=i;k++){
            gap+=i+" ";
        }
        console.log(gap);
        
    }
}
tri(5);

function hal(n){
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n|| j===1||j===n ) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}
hal(5);

function llo(n){
    for(i=1;i<=n;i++){
        let gap="";
        for(j=1;j<=n;j++){
            if(i===1||i===n||j===1||j===n){
                gap+=i+" ";
            }
            else{
                gap+="  "
            }
        }
        console.log(gap);
        
    }
}
llo(3);