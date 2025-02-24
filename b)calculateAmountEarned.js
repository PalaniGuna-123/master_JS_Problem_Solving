// You need to calculate the total amount earned by an Ola cabs owner based on the distance travelled by his vehicles...
// You are given an array where each entry contains;
// the type of cab
// the number of kilometers traveled, separated by a space 
// Rates for each cab type:
// Mini: $15 per kilometer
// Micro: $10 per kilometer
// Prime: $20 per kilometer

// Example input:
// ["mini 20","micro 4","prime 20"]
// calculations:
//  Mini: 20 * 15=300
//  Micro: 4*10=40
//  Prime: 20*20=400
//  Total Fee: 300+40+400=680
//  write a program that takes the input array and clculates the total amount MediaElementAudioSourceNode
function example(arr){
    let total=0;
    for(let cart of arr){
        let[code,quantity]=cart.split(" ")
        quantity=parseInt(quantity,10)
        if(code==="mini"){
            total+=15*quantity;
        }
        else if(code==="micro"){
            total+=10*quantity;
        }
        else if (code==="prime") {
            total+=20*quantity;
        }

    }
console.log(total);

}
example(["mini 20","micro 4","prime 20"])

function earn(arr){
    let total=0;
    for(let cart of arr){
        let[code,quantity]=cart.split(" ");
        quantity=parseInt(quantity,10);

        if(arr.length===0){
            console.log("array is empty");
        }
        else{

        if(code==="mini"){
            total+=15 * quantity;
        }
        else if(code==="micro"){
            total+=10 * quantity;
        }
        else if(code==="prime"){
            total+=20 * quantity;
        }
    }
    
}
    console.log(total);
    
}
earn(["mini 20","micro 4","prime 20"])
earn([])


