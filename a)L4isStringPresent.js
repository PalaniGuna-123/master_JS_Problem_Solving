function isStringPresent(arr, s) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === s) {
            return true; 
        }
    }
    return false; 
}
const arr = ["apple", "banana", "cherry"];
const s = "banan";
console.log(isStringPresent(arr, s)); 

