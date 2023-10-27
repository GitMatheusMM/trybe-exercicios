const bookList = require('./booklist');

// const formatedBookNames = (list) => {
//   const formattedList = list.books.map((book) => {
//     return `${book.name} - ${book.genre} - ${book.author.name}`
//   });
  
//   return formattedList;
// };

const formatedBookNames = (list) => list.books.map((book) => (
   [`${book.name} - ${book.genre} - ${book.author.name}`]
));

console.log(formatedBookNames(bookList));