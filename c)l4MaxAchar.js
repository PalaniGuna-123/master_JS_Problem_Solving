// Given an array of strings, return the string which has maximum 'a' character present in it. 
//  eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it

function maxAString(arr) {
    let maxCount = 0;
    let maxStr = "";

    // Traverse the array and count 'a' characters in each string
    for (let i = 0; i < arr.length; i++) {
        let countA = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'a') {
                countA++;
            }
        }

        // Update the string with the maximum 'a' count
        if (countA > maxCount) {
            maxCount = countA;
            maxStr = arr[i];
        }
    }

    return maxStr;
}

let arr = ["apple", "appeal", "after", "banish"];
console.log(maxAString(arr)); // Output: appeal

function maxAString(arr){
    let maxcount=0;
    let maxStr="";
    for(let i=0;i<arr.length;i++){
        let countA=0;
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]==='a'){
                countA++;
            }
        }
        if(countA>maxcount){
            maxcount=countA;
            maxStr=arr[i]
        }
    }
    console.log(maxStr);
    
}
maxAString(["apaaaple", "appeal", "after", "banish"])