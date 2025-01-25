function calculateBill(usage){
    let bill=0;
    if(usage<=100){
        bill=usage* 8;
    }
    else if(usage <=300){
        bill = 100 * 8+(usage - 100)*12;
    }
    else{
        bill= 100 *8 + 200 * 12 +(usage -300) * 15;
    }
    return bill;
}
function calculateTotalBill(usages){
    let totalBill =0;
    for(let usage of usages){
        totalBill+=calculateBill(usage);
    }
    console.log(totalBill);
    
}
calculateTotalBill([350,150,100]);


function calculateTotalBillOne(usages) {
    let amount = 0
    for(i=0; i<usages.length; i++){
        for(j=1; j<=usages[i]; j++){
            if(j<=100){
               amount += 8;
            }
            else if(j<=300 && j>=101){
                amount += 12;
            }
            else{
                amount += 15;
            }
        }
    }
    console.log(amount);
}
calculateTotalBillOne([350,150,100]);

function calculate(usages){
    let amount=0;
    for (i=0;i<usages.length;i++){
       for(j=1;j<=usages[i];j++){
        if(j<=100){
            amount+=8
        }
        else if(j<=300 && j>=101){
            amount+=12;
        }
        else{
            amount+=15;
        }
       }
    }
    console.log(amount);
}
calculate([350,150,100]);

function calculateTotalBill(arr){
let total=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i];j++){
        if(j<=100){
            total+=8;
        }
        else if(j<=300 && j>=101){
            total+=12;
        }
        else{
            total+=15;
        }

    }
}
console.log(total);
}
calculateTotalBill([350,150,100])





