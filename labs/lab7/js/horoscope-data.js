// console.log("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.");
// alert("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.");
// document.write("Welcome to Cosmic Horoscopes! 🌟Discover your destiny today.");
var totalSigns = 12;
var ariesCompatibility = 0.65;
var sign = "Aries";
var horoscope = "Your adventurous spirit will lead you to exciting opportunities this week.";
var horoscope1 = "She said, 'Your determination is your greatest strength.' ";
var horoscope2 = 'He exclaimed, "The stars are aligning for you!" ';
var horoscope3 = "It\'s your time. ";
var isLuckyToday = true;

var zSign = "Gemini";
var month = "May";
var dob = 28;
var luckyNum = 416;
var desc = "Gemini is the Zodiac sign for those born between May 20th and June 20th";
var believer = false;

var hzSign = document.getElementById("sign");
hzSign.textContent = zSign;

var hmonth = document.getElementsByClassName("birthday")[0];
hmonth.textContent = "My Birthday is " + month + ", " + dob;

var hluckyNum = document.getElementsByClassName("luckyNum")[0];
hluckyNum.textContent = "My Lucky Number is: " + luckyNum;

var hpar = document.querySelectorAll("p");
hpar[0].textContent = desc;
if (believer) hpar[1].textContent = "I am a believer in Horoscopes";
else hpar[1].textContent = "I am not a believer in Horoscopes";

var geminiFloat = 0.80;
var zM1 = 3.9;
var zM2 = 4.4;
var mood = 4;
var avgMood = (zM1 + zM2 + mood)/3

var horoscopeTitle = "Your Daily " + zSign + " Horoscope";
var horoscopeRating = "Today's Mood Rating for " + zSign + ": " + 4 + " out of 5. The average mood rating for Capricorn and Gemini is " + avgMood.toFixed(2);

var horoscopeMessage = horoscopeTitle + horoscopeRating;
hpar[2].textContent = horoscopeRating;

var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var mySign = signs[5];
var pSign1 = signs[5];
var pSign2 = signs[0];

var myMessage = "My zodiac sign is " + signs[mySign] + ". Kenneth's zodiac sign is: " + signs[pSign1] + ". Ty's sign is: " + signs[pSign2];
var messages = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
    "Your determination will lead to success today. Stay focused on your goals."
    , "Communication is key today. Express yourself clearly and listen to others."
    , "Trust your intuition. It will guide you in making the right decisions."
    , "Your creativity shines today. Use it to inspire and lead others"
    , "Pay attention to the details. Your meticulous work will pay off."
    , "Balance is essential. Find harmony in all aspects of your life."
    , "Embrace transformation. Let go of what no longer serves you"
    , "Adventure awaits. Explore new horizons and expand your horizons"
    , "Hard work leads to success. Keep pushing toward your goals."
    , "Your unique perspective is an asset. Share your ideas with others."
    , "Trust your emotions. They will guide you in making the right choices."]
var myMessage = messages[0];
var p1Message = messages[4];
var p2Message = messages[7];

hpar[3].textContent = mySign + ":  " + myMessage;
hpar[4].textContent = pSign1 + ":  " + p1Message;
hpar[5].textContent = pSign2 + ":  " + p2Message;



