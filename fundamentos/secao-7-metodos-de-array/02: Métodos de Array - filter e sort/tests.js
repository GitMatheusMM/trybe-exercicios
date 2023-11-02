// const person = {
//  name: 'João',
//  lastName: 'Cavernoso',
//  age: 22,
// nationality: 'Angolan',
// };

// const { nationality = 'teste' } = person;

// console.log(nationality); // Angolan

// const heroes = ['Shrek', 'Princess Fiona', 'teste'];

// const [hero1, hero2, hero3 = 'Puss in Boots'] = heroes;

// console.log(hero1); // Shrek
// console.log(hero2); // Princess Fiona
// console.log(hero3); // Puss in Boots

// const person = {
//   name: 'João',
//   lastName: 'Cavernoso',
//   age: 22,
// };

// const { nationality = 'Zimbabwean' } = person;
// console.log(nationality); // Zimbabwean

// const bankValues = {
//   accountNumber: '1756832',
//   balance: 5000,
//   currency: 'USD',
// };

// let {accountNumber: test2, balance: blc, currency: crncy} = bankValues;

// console.log(blc);
// console.log(crncy);

// const character = {
//   name: 'Luke SkyWalker',
//   age: '53',
//   description: {
//     specieName: 'Human',
//     jedi: true,
//   },
//   homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
//   },
// };

// const {description: {specieName: test}} = character;

// console.log(test);



// const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

// const [first, second, third] = arrayTest;

// console.log(first);
// console.log(second);
// console.log(third);



// const test = () => {};

// const data = ['André', 998812789, 'Gabriel', 995794897, 'Carol', 955589216, test];

// const arrayNumbers = data.filter((funct) => typeof funct === 'function');

// console.log(arrayNumbers);





// const products = [
//   { name: 'Maçã', category: 'Frutas', price: 2.5 },
//   { name: 'Leite', category: 'Laticínios', price: 3.0 },
//   { name: 'Pão', category: 'Padaria', price: 1.5 },
//   { name: 'Rosca', category: 'Padaria', price: 9.0 },
//   { name: 'Cenoura', category: 'Legumes', price: 1.0 },
//   { name: 'Queijo', category: 'Laticínios', price: 5.0 },
//   { name: 'Banana', category: 'Frutas', price: 2.0 },
// ];


// const filterPadaria = products
// .filter((prod) => prod.category === 'Padaria')
// .map(({name: namae, price: money}) => ({namaeWa: namae, okane: money}));

// console.log(filterPadaria);


// I DONT UNDERSTAND CRAP THATS IS HAPPENING IN THIS array.sort()
// const numbers = [5, 2, 10, 1, 8, 23, 4, 3, 1789];
// numbers.sort((a, b) => b - a);

// console.log(numbers);


const testN = [2, 5, 9, -11, 35, -72, 90];
testN.sort((a, b) => a - b);
console.log(testN);