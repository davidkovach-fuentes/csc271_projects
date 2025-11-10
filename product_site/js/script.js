// david kovach-fuentes
// script idea && modular functions
// create a script that adds to the greeting message on the homepage
// updates with the day of week and check to see if I am within "working" hours or not
// modular functions to update homepage and HTML element content
// did not use AI but used google to find out how to get the data



var count = 0;
const date = new Date();
const hr = date.getHours();
const mth = date.getMonth();
const dt = date.getDate();
const date_index = date.getDay();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const day = days[date_index]; // select date

// helper function
function updateContent(target, html) {
  target.innerHTML = html;
  return target;
}

var greeting = document.querySelector("h3"); // select first h3 title which is greeting
var msg = document.getElementById("return-msg"); // select by id
var also_greeting = document.getElementsByClassName("title")[1]; // select the second 'title element' which is the greeting

// Basic, no-parameter function to refresh the home UI. Uses existing variables.
function updateHome() {
  // update the greeting (keep it as an <h3> inside the selected element)
  updateContent(greeting, "<h3>today is " + day + "</h3>");
  // update the secondary greeting text
  also_greeting.textContent = ", " + months[mth] + " " + dt;
  // update status message
  if (am_awake) updateContent(msg, "currently awake");
  else updateContent(msg, "currently sleeping...");
}

// call the basic updater once
updateHome();

const am_awake = (hr - 22) <= 0 && hr > 7; // check if hour is not between 11:00 (23:00) and 7:00 AM (7:00) and update



