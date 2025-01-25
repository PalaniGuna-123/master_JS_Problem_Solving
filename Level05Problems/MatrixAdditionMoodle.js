// // implement the matrix addition algorithm. 
// //  Ensure to check for nullity and incomplete matrix(matrix which don't match no of rows and columns).
// //  Hint: You can use JOin to display the result matrix line by line  
// // For Example:   matrixAddition([[1,2]],[1])    Result is Invalid Arguments  
// //  matrixAddition([[1,2],[3,4]],[[5,6],[7,8]]);  6 8 10 12 in javaScript

// function matrixAddition(matrix1, matrix2) {

//     if (!matrix1 || !matrix2) {
//         return "Invalid Arguments: Matrices cannot be null.";
//     }

//     if (matrix1.length !== matrix2.length) {
//         return "Invalid Arguments: Matrices must have the same number of rows.";
//     }

//     for (let i = 0; i < matrix1.length; i++) {
//         if (!Array.isArray(matrix1[i]) || !Array.isArray(matrix2[i])) {
//             return "Invalid Arguments: Both inputs must be 2D matrices.";
//         }
//         if (matrix1[i].length !== matrix2[i].length) {
//             return "Invalid Arguments: Rows in matrices must have the same number of columns.";
//         }
//     }

//     const resultMatrix = [];
//     for (let i = 0; i < matrix1.length; i++) {
//         const row = [];
//         for (let j = 0; j < matrix1[i].length; j++) {
//             row.push(matrix1[i][j] + matrix2[i][j]);
//         }
//         resultMatrix.push(row);
//     }

//     return resultMatrix.map(row => row.join(" ")).join("\n");
// }


// console.log(matrixAddition([[1, 2]], [1])); 
// console.log(matrixAddition([[1, 2], [3, 4]], [[5, 6], [7, 8]])); 

// console.log(matrixAddition([[1, 2, 3]], [[4, 5, 6]])); 

function matt(matrixA,matrixB){
    if(!Array.isArray(matrixB) || !Array.isArray(matrixA)){
        console.log("invalid null");
        return;
    }
    if(matrixA.length!==matrixB.length){
        console.log("Its also invalid");
        return;
        
    }
    for(let i=0;i<matrixA.length;i++){
        if(matrixA[i].length!==matrixB[i].length){
            console.log("invalid");
            return;  
        }
    }
    let original=[]
    for(let i=0;i<matrixA.length;i++){
        let row=[]
        for(j=0;j<matrixA[i].length;j++){
            result=matrixA[i][j]+matrixB[i][j];
            row.push(result);
        }
        original.push(...row)
      
    }
    console.log(original.join(' '));
    
}
matt([[1, 2]], [1]) 
matt([[1, 2], [3, 4]], [[5, 6], [7, 8]])
matt([[1, 2, 3]], [[4, 5, 6]]); 
