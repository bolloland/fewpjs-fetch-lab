// fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => console.log(json[4]["name"]));

//   fetch('https://anapioficeandfire.com/api/characters/1031')
//   .then(resp => resp.json())
//   .then(json => console.log(json["name"]))

//   fetch('https://anapioficeandfire.com/api/books')
//   .then(resp => resp.json())
//   .then(json => {
//     pagesArray = []
//     for (i = 0; i < json.length; i++) {
//     pagesArray.push(json[i]["numberOfPages"])
//     }
//     console.log(pagesArray)
//     const reducer = (adder, current) => adder + current
//     console.log(pagesArray.reduce(reducer))
//   });
///////////////////////////////////////////////   DELIVERABLES ///////////
let fetchBooks = () => {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => renderBooks(json))
}

let renderBooks = (books) => {
  let ul = document.createElement("ul")
  let bookList = document.querySelector("#booklist")
  books.forEach(x => {
    let h3 = document.createElement("h3")
    h3.innerText = x.name
    bookList.appendChild(h3)
  })
}




  // fetch('https://anapioficeandfire.com/api/books')
  // .then(resp => resp.json())
  // .then(json => {
  //   characterArray = []
  //   for (i = 0; i < json.length; i++) {
  //   json[i]["characters"].forEach(x => characterArray.push(x))
  //   }
  //   console.log(characterArray)
  // });