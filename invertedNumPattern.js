function printPattern(n){
    for(let i=n;i>=1;i--){
        let res='';
        let gap='';
        let sym='';
        for(j=1;j<=i;j++){
            sym+=j+' ';
        }
        for(k=0;k<n-i;k++){
            gap+=' ';
        }
        res=gap+sym;
        console.log(res);
        
    }
}
printPattern(5)