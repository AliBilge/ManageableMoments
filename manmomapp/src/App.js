function currentTime() {
    /* assigning variables */
     var date = new Date();
}
/* Assigning variables for date */
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var curWeekDay = days[date.getDay()]; // get day
var curDay = date.getDate();  // get date
var curMonth = months[date.getMonth()]; // get month
var curYear = date.getFullYear(); // get year
var date = curWeekDay + ",    " + curMonth + "  " + curDay + " , " + curYear; // Display today's date
document.getElementById("dateToday").innerHTML = date;