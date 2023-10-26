const bookList = require('./booklist');

const currentYear = new Date().getFullYear();
const nameAndAge = (list) => list.books.map((book) => (
  [{
    author: book.author.name,
    age: (book.releaseYear - book.author.birthYear),
  }]
));

console.log(nameAndAge(bookList));