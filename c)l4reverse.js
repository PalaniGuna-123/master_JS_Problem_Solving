let arr = ["guna", "gun", "jill"];
let reversed = []; 

for (let i = arr.length - 1; i >= 0; i--) {
    reversed[reversed.length] = arr[i]; 
}


let result = "";
for (let i = 0; i < reversed.length; i++) {
    result += reversed[i];
    if (i < reversed.length - 1) {
        result += ", "; 
    }
}
console.log(result);

function your(arr){
    let reversed=[];
    for(let i=arr.length-1;i>0;i++){
        reversed[reversed.length]=arr[i];
    }
    let result="";
    for(let i=0;i<reversed.length;i++){
        result+=reversed[i];
        if(i<reversed.length-1){
            result+=", ";
        }
    }
    console.log(result);
    
}
your(["guna", "gun", "jill"])