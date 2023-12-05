//Date Object
var d = new Date();
//getFullYear() Method
var n = d.getFullYear();

//geyMonth() Method
var m = d.getMonth();

//Display the year
console.log("Year:", n);
console.log("Month:", m);


//
//Date Object with a specified date
var d = new Date("April 25, 2020");
//getFullYear() Method
var n = d.getFullYear();
//Display
console.log("Year:", n);



//Date Object with a specified date
var d = new Date("December 25, 2022");
//getMonth() Method
var m = d.getMonth();
//Display
console.log("Month:", m);

const dayInMonth =  new Date('Jul 11 2011');
const day1 = dayInMonth.getDate();
console.log(day1);

/******************** getDate ******************/

// The getDate() method in JavaScript is used to get the day of the month for a specified date.
// The syntax for using the getDate() method is:
//getDate();

/*let date = new Date("2023-08-04");
let day = date.getDate();

console.log("The current date is: " + day); */

/************************* getHours() method ***********************/
/* let date = new Date();
let hr = date.getHours();
console.log("The current hours is: " + hr); */

/*************************** getMinutes() *******************************/

 /* var date = new Date();
var minutes = date.getMinutes();

console.log("The current minute is: " + minutes); */

/**************************** getSeconds() method **********************************/

// Create a new Date object
/*let today = new Date();

// Get the seconds from the date
let seconds = today.getSeconds();

// Log the seconds to the console
console.log("The current second is: " + seconds); */


// Create two new Date objects
/* let today = new Date();
let yesterday = new Date(today - 24 * 60 * 60 * 1000);

// Get the seconds from both dates
let todaySeconds = today.getSeconds();
let yesterdaySeconds = yesterday.getSeconds();

// Compare the seconds
if (todaySeconds < yesterdaySeconds) {
  console.log("Today is earlier than yesterday");
} else {
  console.log("Today is not earlier than yesterday");
} */

/***********************  getMilliseconds() **************************** */
/* let date = new Date();
let milliseconds = date.getMilliseconds();
console.log(milliseconds); */

/* let date1 = new Date("August 15, 1947 20:22:10:565");
let date2 = new Date("August 15, 1947 20:22:10:567");

let milliseconds1 = date1.getMilliseconds();
let milliseconds2 = date2.getMilliseconds();

if (milliseconds1 < milliseconds2) {
  console.log("date1 is earlier than date2");
} else if (milliseconds1 > milliseconds2) {
  console.log("date1 is later than date2");
} else {
  console.log("date1 and date2 are the same");
} */

/******************************  getDay()  **********************************/
// The getDay() method returns the day of the week (0 to 6) of a date.

let date = new Date();
let day = date.getDay();

switch (day) {
    case 0: 
    console.log("sunday");
    break;
    case 1: 
    console.log("Monday");
    break;
    case 2: 
    console.log("Tueday");
    break;
    case 3: 
    console.log("wednesday");
    break;
    case 4: 
    console.log("thursday");
    break;
    case 5: 
    console.log("friday");
    break;
    case 6: 
    console.log("saturday");
    break;
    default:
    console.log("Invalid day");
}
