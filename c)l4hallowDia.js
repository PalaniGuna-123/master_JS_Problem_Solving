function hollowDiamond(n) {
    // Upper part of the diamond
    for (let i = 0; i < n; i++) {
        let row = "";

        // Leading spaces
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }

        // Add stars and spaces
        for (let j = 0; j < 2 * i + 1; j++) {
            if (j === 0 || j === 2 * i) {
                row += "*"; // Add stars at the boundaries
            } else {
                row += " "; // Add spaces in between
            }
        }

        console.log(row); // Print the row
    }

    // Lower part of the diamond
    for (let i = n - 2; i >= 0; i--) {
        let row = "";

        // Leading spaces
        for (let j = 0; j < n - i - 1; j++) {
            row += " ";
        }

        // Add stars and spaces
        for (let j = 0; j < 2 * i + 1; j++) {
            if (j === 0 || j === 2 * i) {
                row += "*"; // Add stars at the boundaries
            } else {
                row += " "; // Add spaces in between
            }
        }

        console.log(row); // Print the row
    }
}

hollowDiamond(5);
