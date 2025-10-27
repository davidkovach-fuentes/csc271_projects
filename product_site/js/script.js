// david kovach-fuentes
// script idea
// create a script that adds to the greeting message on the homepage
// updates with the day of week and check to see if I am within "working" hours or not
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


var greeting = document.querySelector("h3"); // select first h3 title which is greeting
var msg = document.getElementById("return-msg"); // select by id
var also_greeting = document.getElementsByClassName("title")[1]; // select the second 'title element' which is the greeting

greeting.textContent = "today is " + day; // updating day of week
also_greeting.textContent += ", " + months[mth] + " " + dt; // add month and day


const am_awake = (hr - 22) <= 0 && hr > 7; // check if hour is not between 11:00 (23:00) and 7:00 AM (7:00) and update
if (am_awake) msg.innerHTML = msg.innerHTML = "<h2 id='return-msg' class='title text-s2 text-nord5 ml-s1'>currently awake</h2>";
else msg.innerHTML = "<h2 id='return-msg' class='title text-s2 text-nord5 ml-s1'>currently sleeping...</h2>";



