// User se year lena
var year = prompt("Enter a year:");

// Year ko number me convert karna
year = Number(year);

// Leap year check karna
if (year % 4 === 0) {
    alert(year + " is a leap year.");
} else {
    alert(year + " is NOT a leap year.");
}
