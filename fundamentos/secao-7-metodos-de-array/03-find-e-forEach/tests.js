// // spread operator

// const originalArray = [1, 2, 3];
// const second = [4, 5, 6, 'another']
// const copiedArray = [...originalArray];
// const mergedArray = [...originalArray, ...second];

// // console.log(copiedArray);
// console.log(mergedArray);

// // IN OBJECTS
// const person = { name: 'John', age: 30 };
// const additionalInfo = { occupation: 'Engineer', country: 'FRA' };

// const mergedObject = { ...person, ...additionalInfo };

// console.log(mergedObject);

//Array.find()

// const games = [
//   { id: 1, title: 'Counter-Strike: Global Offensive', genre: 'FPS' },
//   { id: 2, title: 'Dota 2', genre: 'MOBA' },
//   { id: 3, title: 'Half-Life 2', genre: 'FPS' },
//   { id: 4, title: 'Portal 2', genre: 'Puzzle' },
// ];

// const findGame = games.find((game) => game.title === 'Portal 2');

// console.log(findGame);


// array.forEach() 

const series = [
  { title: 'Stranger Things', genre: 'Sci-Fi', rating: 8.8 },
  { title: 'Narcos', genre: 'Crime', rating: 8.8 },
  { title: 'The Crown', genre: 'Drama', rating: 8.7 },
  { title: 'Black Mirror', genre: 'Sci-Fi', rating: 8.8 },
];

//mostrar todas séries

series.forEach((serie) => {
  console.log(`${serie.title} do gênero ${serie.genre} com a nota ${serie.rating}`);
});