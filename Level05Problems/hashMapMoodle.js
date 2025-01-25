function compressString(input) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < input.length; i++) {
        
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            compressed += input[i] + count;
            count = 1; // Reset the count
        }
    }

    // Return the compressed string if it's shorter than the original, otherwise return the original
    return compressed.length < input.length ? compressed : input;
}

console.log(compressString("aabcccccaaazzzzzz")); 
console.log(compressString("abc")); 
