function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";

        // Left part of the pattern
        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }

        // Spaces in the middle
        for (let k = 1; k <= (n - i) * 2; k++) {
            line += " ";
        }

        // Right part of the pattern
        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }

        console.log(line.trim());
    }
}

// Example usage:
printPattern(3);
/*
Output:
1         1
2 2     2 2
3 3 3 3 3 3
*/


function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";

        // Left part of the pattern
        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }

        // Spaces in the middle
        for (let k = 1; k <= (n - i) * 2; k++) {
            line += "  ";
        }

        // Right part of the pattern
        for (let j = 1; j <= i; j++) {
            line += i + " ";
        }

        console.log(line.trim());
    }
}
printPattern(3);

function patter(n){
    for(let i=1;i<=n;i++){
        let line="";
        for(let j=1;j<=i;j++){
            line+=i+" "
        }
        for(let k=1;k<=(n-i)*2;k++){
            line+=" ";
        }
        for(let j=1;j<=i;j++){
            line+=i+" "
        }
        console.log(line.trim());
    }

}
patter(3)