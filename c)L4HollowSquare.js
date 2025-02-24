function simpleHallow(n){
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=n;j++){
            if(i===1 || i===n){
                row+=i+" "
            }
            else if(j===1 || j===n){
                row+=i+" "
            }
            else{
                row+="  "
            }
        }
        console.log(row)
    }
}
simpleHallow(5)