function sumOfDigi(n){
    let num= n;
    while(num>=10){
        let sum=0;
        while(num>0){
            let digit=num%10;
            sum+=digit;
            num=Math.floor(num/10);
        }
     num=sum;
    }
    console.log(num);
    
}
sumOfDigi(732);

function sumOf(n){
let num=n;
while(num>=10){
    let sum=0;
    while(num>0){
        let digit=num%10;
        sum+=digit;
        num=Math.floor(num/10);
    }
    num=sum;
}
console.log(num);

}
sumOf(641)