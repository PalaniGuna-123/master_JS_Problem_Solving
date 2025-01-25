function starHashDiamond(n) {
    let str = '';

    // Upper part of the diamond
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            str += ' ';
        }
        for (let k = 1; k <= i; k++) {
            if (i % 2 === 1) {
                str += '* ';
            } else {
                str += '# '; 
            }
        }
        str += '\n';
    }

    // Lower part of the diamond
    for (let i = n - 1; i >= 1; i--) {
        for (let j = 1; j <= n - i; j++) {
            str += ' ';
        }
        for (let k = 1; k <= i; k++) {
            if (i % 2 === 1) {
                str += '* '; 
            } else {
                str += '# '; 
            }
        }
        str += '\n';
    }

    return str;
}

console.log(starHashDiamond(4));

function stardia(n){
    for(i=1;i<=n;i++){
        let row="";
        for(j=1;j<=n-i;j++){
            row+=" "
        }
        for(k=1;k<=i;k++){
            if(i%2!==0){
                row+="* "
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
            row+=" "
        }
        for(k=1;k<=i;k++){
            if(i%2!==0){
                row+="* "
            }
            else{
                row+="# "
            }
        }
        console.log(row);
        
    }
}
stardia(4);