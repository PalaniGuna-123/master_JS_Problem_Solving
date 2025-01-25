// Given an array of string as ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"]
// Find the oldest date. In the given example the oldest date is OCT-10-1987.
// Need to do this without using any library functions other than
// converting String to Integers

// Function to convert month name to number

function months(month){
    let months=["JAN","FEB","MAR","APR",""]
    return months.indexOf(month)+1;
}
function monthToNumber(month) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return months.indexOf(month) + 1; // Return month number
}


// Function to compare two dates
function compareDates(date1, date2) {
    const [month1, day1, year1] = date1.split("-");
    const [month2, day2, year2] = date2.split("-");

    const monthNum1 = monthToNumber(month1);
    const monthNum2 = monthToNumber(month2);
    
    // Compare years first
    if (parseInt(year1) < parseInt(year2)) return date1;
    if (parseInt(year1) > parseInt(year2)) return date2;

    // If years are equal, compare months
    if (monthNum1 < monthNum2) return date1;
    if (monthNum1 > monthNum2) return date2;

    // If both years and months are equal, compare days
    if (parseInt(day1) < parseInt(day2)) return date1;
    if (parseInt(day1) > parseInt(day2)) return date2;

    return date1; // In case both dates are the same (unlikely)
}

// Function to find the oldest date from an array
function findOldestDate(datesArray) {
    let oldestDate = datesArray[0];

    for (let i = 1; i < datesArray.length; i++) {
        oldestDate = compareDates(oldestDate, datesArray[i]);
    }

    return oldestDate;
}

// Example array of dates
const datesArray = ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"];

// Find the oldest date
const oldestDate = findOldestDate(datesArray);
console.log("Oldest date in the array:", oldestDate);
