function isONeOfAnother(str1,str2){
    if(str1.length!=str2.length){
        console.log(false);
        return;
    }
    let obj1={}
    let obj2={}
    for(let i=0;i<str1.length;i++){
        obj1[str1[i]]=(obj1[str1[i]]||0)+1;
    }
   for(let i=0;i<str2.length;i++){
    obj2[str2[i]]=(obj2[str2[i]]||0)+1
   }
   let result=true;
   for(let i in obj1){
    if(obj1[i]!=obj2[i]){
        result=false;
        break;
    }
   }
   console.log(result);   
}