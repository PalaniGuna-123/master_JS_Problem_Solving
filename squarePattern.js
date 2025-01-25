function square(n){
    let str='';
    for(i=0;i<n;i++){
        for(j=0;j<n;j++){
            str+='* ';
        }
        str+='\n';

    }
    return str;

}
console.log(square(3));

function test(n){
    for(i=1;i<=n;i++){
        let str='';
        for(j=1;j<=n;j++){
            str+='* ';
        }
        console.log(str);
        
    }
}
test(3);
function raw(n){
    for(i=1;i<=n;i++){
        let str="";
        for(j=1;j<=i;j++){
           if(i%2!==0){
            str+="* ";
            
           }
           else{
            str+="# "
           }
        }
        console.log(str);
        
    }
}
raw(3)

