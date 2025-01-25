function matrixMultiplication(matrixA, matrixB) {
    // Validate inputs
    if (!Array.isArray(matrixA) || !Array.isArray(matrixB)) {
        console.log("Invalid matrices");
        return;
    }

    // Check if the number of columns in matrixA equals the number of rows in matrixB
    if (matrixA[0].length !== matrixB.length) {
        console.log("Matrix dimensions do not match for multiplication");
        return;
    }

    let result = []; // To store the resultant matrix

    // Perform multiplication
    for (let i = 0; i < matrixA.length; i++) {
        let row = [];
        for (let j = 0; j < matrixB[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < matrixA[0].length; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    console.log(result);
}

// Test cases
matrixMultiplication(
    [[1, 2], [3, 4]], // 2x2 matrix
    [[5, 6], [7, 8]]  // 2x2 matrix
);

matrixMultiplication(
    [[1, 2, 3]],       // 1x3 matrix
    [[4], [5], [6]]    // 3x1 matrix
);

matrixMultiplication(
    [[1, 2, 3], [4, 5, 6]], // 2x3 matrix
    [[7, 8], [9, 10], [11, 12]] // 3x2 matrix
);

function matmulti(matrixA,matrixB){
    if(!Array.isArray(matrixA) || !Array.isArray(matrixB)){
        console.log("Invalid credencials");
        return;
    }
    if(matrixA[0].length !== matrixB.length){
        console.log("invalid");
        return;
    }
    let original=[]
    for(i=0;i<matrixA.length;i++){
        let row=[]
        for(j=0;j<matrixB[0].length;j++){
            let sum=0
            for(k=0;k<matrixA[0].length;k++){
                sum+=matrixA[i][k] * matrixB[k][j]
            }
            row.push(sum)
        }
        original.push(...row)
    }
    console.log(original.join(' '));
    

}
matmulti(
    [[1, 2], [3, 4]], // 2x2 matrix
    [[5, 6], [7, 8]]  // 2x2 matrix
);
matmulti(
    [[1, 2, 3]],       // 1x3 matrix
    [[4], [5], [6]]    // 3x1 matrix
);

matmulti(
    [[1, 2, 3], [4, 5, 6]], // 2x3 matrix
    [[7, 8], [9, 10], [11, 12]] // 3x2 matrix
);
