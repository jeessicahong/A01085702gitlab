// Add DOM selectors to target input and UL movie list
var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");
var myMovieHistory = document.getElementById("movieHistoryCard");
var movieHistoryTable = document.getElementById("movieHistoryTable");

// Example of a simple function that clears the input after a user types something in
function clearInput() {
    inp.value = "";
}

function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
    // Step 1: Get value of input
    var userTypedText = inp.value;
    // Step 2: Create an empty <li></li>
    var li = document.createElement("li"); // <li></li>

    // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
    var textToInsert = document.createTextNode(userTypedText);

    // Step 4: Insert text into li
    // <li>Harry Potter </li>
    li.appendChild(textToInsert);

    // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
    myMovieList.appendChild(li);
}

function createMovieHistoryTable() {
    // Create <table></table>
    var movieHistoryTable = document.createElement("table");
    movieHistoryTable.setAttribute("id", "movieHistoryTable");

    // Insert <table></table> under "Movie History" heading
    myMovieHistory.appendChild(movieHistoryTable);
}

var table = document.querySelector("table");

if(table == null){
    // Creates Movie History Table if it doesn't exist in HTML 
    createMovieHistoryTable();
}

var movies = {};

function addMovieHistory() {
    // Get value of input
    var userTypedText = inp.value;
    // Prepare the text we will insert into movieTitle
    var textToInsert = document.createTextNode(userTypedText);

    var table = document.querySelector("table");

    if(table == null){
        createMovieHistoryTable();
    }

    table = document.querySelector("table");

    // Create row element
    var row = document.createElement("tr");
    // Create cell elements
    var movieTitle = document.createElement("td");
    var timesWatched = document.createElement("td");

    // Insert row in table
    table.appendChild(row);

    var length = Object.keys(movies).length;
    // Check if movie title currently exists in list
    var check = movies.hasOwnProperty(userTypedText);

    if(length == 0 && check == false){

        movies[userTypedText] = 1;

        var value = document.createTextNode(Object.values(movies)[0]);

        // Insert cells into rows
        row.appendChild(movieTitle);
        row.appendChild(timesWatched);
        row.setAttribute("id", userTypedText);
        // Insert values into cells
        movieTitle.appendChild(textToInsert);
        timesWatched.appendChild(value);

    }else if(check == true){
        // Get value of key
        var value = movies[userTypedText];
        value += 1;

        // Delete current key:value pair
        delete movies[userTypedText];
        // Add new key:value pair 
        movies[userTypedText] = value;

        value = value.toString();

        value = document.createTextNode(value);

        // Remove element with ID = userTypedText
        var child = document.getElementById(userTypedText);
        child.parentNode.removeChild(child);

        // Insert cells into rows
        row.appendChild(movieTitle);
        row.appendChild(timesWatched);
        row.setAttribute("id", userTypedText);
        // Insert values into cells
        movieTitle.appendChild(textToInsert);
        timesWatched.appendChild(value);
    }else{
        
        movies[userTypedText] = 1;
        var value = movies[userTypedText];
        value = value.toString();

        value = document.createTextNode(value);

        // Insert cells into rows
        row.appendChild(movieTitle);
        row.appendChild(timesWatched);
        row.setAttribute("id", userTypedText);
        // Insert values into cells
        movieTitle.appendChild(textToInsert);
        timesWatched.appendChild(value);
    }

    // Call the clearInput function to clear the input field
    clearInput();
}

function deleteMovieHistory() {
    // Clear table from HTML 
    var child = document.getElementById("movieHistoryTable");
    child.remove();

    // Clear movies from object list
    movies = {};
}

