// //  Count the Number of Occurrences of a String s2 in a String s1
// function countOccurrences(s1, s2) {
//     let count = 0; 
//     let i = 0; // Index for traversing `s1`

//     while (i <= s1.length - s2.length) {
//         let match = true;

//         for (let j = 0; j < s2.length; j++) {
//             if (s1[i + j] !== s2[j]) {
//                 match = false; // Mismatch found
//                 break;
//             }
//         }

//         if (match) {
//             count++; // Increment count for match
//             i += s2.length; // Move past this occurrence
//         } else {
//             i++; // Move to the next character
//         }
//     }

//     return count;
// }

// // Example usage:
// let s1 = "This is a String";
// let s2 = "is";
// console.log(countOccurrences(s1, s2)); // Output: 2

function Arroccurrence(arr,value){
   let cont=0;
   let guna =arr[0].split(" ")
for(let i=0;i<guna.length;i++){
     if(guna[i].includes(value)){
        cont += 1
     }   
}
console.log(cont);

}
Arroccurrence(["this is a string"],"is")


function daddy(arr,value){
    let count=0;
    henry=arr[0].split(" ")
    for(i=0;i<henry.length;i++){
        if(henry[i].includes(value)){
            count++;
        }
    }
    console.log(count);
    
    
}
daddy(["this is a string"],"is")

function yamaha(arr,value){
    let count=0;
    let clone=arr[0].split(" ");
    for(let i=0;i<clone.length;i++){
        if(clone[i].includes(value)){
            count++
        }
    }
    console.log(count);
    
}
yamaha(["this is a string"],"is")