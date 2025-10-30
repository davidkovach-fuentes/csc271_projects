/* TO DO:

	- Create an array to hold three different usernames. 

	- Create an array with the dates of each review (i.e., 2024-10-30).

	- Create an array to hold the actual reviews. 

	- Create an array to hold three different ratings. 

*/

/* TO DO:

	- Select ALL review card elements and store in a variable.

	- Loop through each card to update its content with review information:
		- Select the current review rating element.
		- Create a variable that will hold the filled and empty stars. 
		- Loop to generate star symbols based on the rating:
			- If current counter is less than the rating, then add "★".
			- Otherwise, add "☆".
		- Set the review rating element's text to display the generated stars.
		- Set the review rating element's attribute to current rating from the array. 

		- Select the current review username element.
		- Set its text to the username from the array and add a space to separate it from the date.

		- Select the current review date element.
		- Set its markup to the date from the array.

		- Select the current review text element.
		- Set its text to the review text from the array.
 
*/

var users = ['Sean', 'John', 'Han'];
var reviewDates = ['2025-3-20', '2022-4-30', '2023-10-31'];
var reviewRatings = [4, 5, 5];
var reviewData = ['this movie is good', 'this movie is great', 'this movie is the best'];

var ratingDOM = document.getElementsByClassName("review-rating");
var usernameDOM = document.getElementsByClassName("review-username");
var textDOM = document.getElementsByClassName("review-text");
var dateDOM = document.getElementsByClassName("review-date");

for (let i = 0; i < ratingDOM.length; i++) {
	// Clear existing stars

	usernameDOM[i].childNodes[0].textContent = users[i] + ' ';
	dateDOM[i].textContent = reviewDates[i];

	textDOM[i].textContent = reviewData[i];

	let stars = '';
	for (let j = 0; j < 5; j++) {
		stars += j < reviewRatings[i] ? '★' : '☆';
	}
	ratingDOM[i].textContent = stars;
	ratingDOM[i].setAttribute('data-rating', reviewRatings[i].toString());
}

// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function () {

	var rating = filterDropdown.value;
	var reviewCards = document.getElementsByClassName('review-card');

	for (let i = 0; i < reviewCards.length; i++) {
		var cardRating = ratingDOM[i].getAttribute('data-rating');
		if (rating === 'All' || rating === cardRating) {
			reviewCards[i].style.display = 'block';
		} else {
			reviewCards[i].style.display = 'none';
		}
	}

});



