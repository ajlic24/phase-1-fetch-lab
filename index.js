function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then(renderBooks);
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });


  

function totalPages(books) {
    const arr = books.map((book) => {
      return book.numberOfPages
    })
    console.log(arr)
    return arr.reduce((a, b) => a + b, 0)
  }

  // fetchBooks()