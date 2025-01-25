function printPattern(n){
    for(let i=1;i<=n;i++){
        if(i%2!==0){
            console.log(i);
            continue;
        }
        let output="";
        for(let j=1;j<=i;j++){
            output+="*"+" ";
        }
        console.log(output);
    }
}
printPattern(4)

function printpattern(n){
    for(let i=1;i<=n;i++){
        if(i%2!==0){
            console.log(i);
            continue;
        }
        let str="";
        for(let j=1;j<=i;j++){
            str+="* ";

        }
        console.log(str);
        
    }
}
printPattern(5)