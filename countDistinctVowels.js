function countDistinctVowels(str){
    const vowels='aeiou';
    let distinctVowels='';
    for(let char of str){
        if(vowels.includes(char)&& !distinctVowels.includes(char)){
            distinctVowels+=char;
        }
    }
    console.log(distinctVowels.length);
    
}
countDistinctVowels('cooaeioul');
countDistinctVowels('saravanan');


// // without using inbuilt method
// function countDistinctVowels(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']; // Array of vowels
//     let distinctVowels = []; // Array to store distinct vowels

//     for (let i = 0; i < str.length; i++) {
//         let isVowel = false;
//         // Check if the current character is a vowel
//         for (let j = 0; j < vowels.length; j++) {
//             if (str[i] === vowels[j]) {
//                 isVowel = true;
//                 break;
//             }
//         }

//         // If it's a vowel, check if it's already in distinctVowels
//         if (isVowel) {
//             let alreadyExists = false;
//             for (let k = 0; k < distinctVowels.length; k++) {
//                 if (distinctVowels[k] === str[i]) {
//                     alreadyExists = true;
//                     break;
//                 }
//             }
//             // Add to distinctVowels if it doesn't already exist
//             if (!alreadyExists) {
//                 distinctVowels.push(str[i]);
//             }
//         }
//     }

//     console.log(distinctVowels.length); // Print the count of distinct vowels
// }

// countDistinctVowels('cooaeioul'); // Output: 5
// countDistinctVowels('saravanan'); // Output: 1

function count(str){
    let vowels="aeiou"
    let dist="";
    for(let char of str){
        if(vowels.includes(char)&& !dist.includes(char)){
            dist+=char;
        }
    }
    console.log(dist.length);
    
}
count("Guna");

function count(str){
    let vowels="aeiouAEIOU"
    let dist=""
    for(let char of str){
        if(vowels.includes(char)&& !dist.includes(char)){
            dist+=char;
        }
    }
    console.log(dist);   
}
count("good boy")

function count(str){
    let vowel="aeiouAEIOU"
    let dist="";
    for(let char of str){
        if(vowel.includes(char) && !dist.includes(char)){
            dist+=char;
        }
    }
    console.log(dist.length);
    
}
count("good boy is guna")