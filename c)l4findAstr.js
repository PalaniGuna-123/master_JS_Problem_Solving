// In an array of string, return all the string which start with the letter 'a' (Case insensitive) for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali
function string(arr){
    let str='';

    for(let i=0;i<arr.length;i++){
        if(arr[i][0].toUpperCase()===("A") ){
            str+=arr[i]+", "
            
        }

    }
    str=str.slice(0,-2)
    console.log(str );
    

}
string(["apple", "Ali", "mango","Brush"])

function miss(arr){
    str="";
    for(i=0;i<arr.length;i++){
        if(arr[i][0].toUpperCase()==="A"){
            str+=arr[i]+" "
        }
    }
    console.log(str);
    
}
miss(["apple", "Ali", "mango","Brush"])
