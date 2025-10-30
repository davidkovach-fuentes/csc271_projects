/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.
	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/

var movieTitles = ['Spirited Away', 'Princess Mononoke', 'Castle in The Sky'];

var movieURLS = ['https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png'
	, 'https://academymuseumstore.org/cdn/shop/files/5e2885a3-a526-41ce-8726-f19cf43dbb41.jpg?v=1755013834'
	, 'https://upload.wikimedia.org/wikipedia/en/f/f5/Castle_in_the_Sky_%281986%29.png'];

var siteURLS = ['spirited-away.html'
	, 'princess_mononoke.html'
	, 'castle_in_the_sky.html'];

var movieRatings = [5, 5, 5];

var movieImages = document.getElementsByClassName("movie-image");
var movieLinks = document.getElementsByClassName("movie-link");

var movieRatingElements = document.getElementsByClassName("rating");


for (let i = 0; i < movieImages.length; i++) {

    movieImages[i].src = movieURLS[i];
    movieImages[i].alt = movieTitles[i];
    

    for (let j = 0; j < movieRatings[i]; j++) {
			movieRatingElements[i].textContent += '★';
    }

		movieLinks[i].textContent = movieTitles[i];
		movieLinks[i].href = siteURLS[i];
}

/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/
