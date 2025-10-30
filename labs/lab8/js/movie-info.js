/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var movieInfo = ['Spirited Away', 'https://upload.wikimedia.org/wikipedia/en/d/db/Spirited_Away_Japanese_poster.png', 5, 'ex'];
var movieImg = document.getElementsByClassName("movie-image")[0];
var movieTitle = document.getElementsByClassName("movie-name")[0];
var movieDesc = document.getElementsByClassName("description")[0];
var movieRating = document.getElementsByClassName("rating")[0];

movieImg.alt = movieInfo[0];
movieImg.src = movieInfo[1];

movieTitle.textContent = movieInfo[0];
movieDesc.textContent = "10-year-old Chihiro finds herself trapped in the spirit world after wandering into a thought-to-be abandoned amusement park. Her parents were punished for eating food without permission of the spirits. Now she must work to free herself and rescue her parents from the spirit world. Along the way, she meets other characters such as Haku, Yubaba, and Kanoshi. Kanoshi 'No-Face' is the famous cloaked figure from the movie.";
for (let j = 0; j < movieInfo[2]; j++) {
    movieRating.textContent += '★';
}

