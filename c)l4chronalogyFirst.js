// Given two dates as strings "JAN-12-2024", "FEB-12-1900" return the date that comes chronologically first i.e. FEB-12-1900
// Function to convert month name to number
function monthToNumber(month) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    return months.indexOf(month) + 1; // Return month number
}


// Function to compare two dates
function compareDates(date1, date2) {
    const [month1, day1, year1] = date1.split("-");
    const [month2, day2, year2] = date2.split("-");
    // let monthNUM1=monthToNumber(month1)
    // let monthNUM2=monthToNumber(month1)

    const monthNum1 = monthToNumber(month1);
    const monthNum2 = monthToNumber(month2);
    
    // Compare years first
    // if (parseInt(year1) < parseInt(year2)) return date1;
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

// Example dates
const date1 = "JAN-12-2024";
const date2 = "FEB-12-1900";

// Get the chronologically first date
const firstDate = compareDates(date1, date2);
console.log("Chronologically first date:", firstDate);


