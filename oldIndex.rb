# function fetchBooks() {
#     //function called fetchBooks(), does the following:
#     return fetch("https://anapioficeandfire.com/api/books")
#     //display on DOM (RETURN) this fetch request from this db/server
#     .then(bananas => bananas.json())
#         //.then(response => response.json)
#         //then, we get a response of everything(bananas), but we only want the 
#         //JSON data, so use dot notation to get that. bananas.json or response.json
#     .then(apples => renderBooks(apples)
    
#       //.then(json => renderBooks(json))
#       # //this format allows the resonse.json == json
#       // we then take that json data and gets put into the renderBooks function below
#       //THEN basically says, "don't do jack until I get this resolved"
#       )}
  
#   function renderBooks(books) {
#     //renderBooks takes in some data (books - in this case our json data)
#     const main = document.querySelector('main');
#     //finds and names the 'main' section in our HTML with a constant variable
#     books.forEach(book => {
#       //interpolates over our JSON data and does...
#       const h2 = document.createElement('h2');
#       //creates an h2 element tag (and names it)
#       h2.innerHTML = book.name;
#       //and then inserts the .name value from reach book in the json
#       //safe to say that one would have to manually search/parse the data to know
#       //exactly where to get that specific information 
#       main.appendChild(h2);
#       //the H2 element has the book title, so we APPEND that CHILD node to the `main` 
#       //section inside out HTML
#     });
#   }
  
#   //THIS IS HUGE
#   //so none of this will work unless FETCH is inside the callback method
#   //fetch is in fetchBooks which is the callback method.
#   //it says, "no one is doing anything until I'm done running fetchBooks"
#   //ASYNCHRONOUS = no other JS code runs until that's done.
#   // AND - it won't work if that fetch isn't in there. 
#   document.addEventListener('DOMContentLoaded', function() {
#     fetchBooks();
#   });
  