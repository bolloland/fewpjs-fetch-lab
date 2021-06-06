function fetchBooks() {
  //function called fetchBooks(), does the following:
  return fetch("https://anapioficeandfire.com/api/books")
  //display on DOM (RETURN) this fetch request from this db/server
  .then(bananas => bananas.json())
      //.then(response => response.json)
      //then, we get a response of everything(bananas), but we only want the JSON data, so use dot notation to get that. bananas.json or response.json
  .then(apples => renderBooks(apples)
    //.then(json => renderBooks(json))
    //
    )}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
