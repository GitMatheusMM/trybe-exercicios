const listCountries = require('./countries');

// EXERCISE 1
//Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.

const addPlanet = (countries) => countries.forEach(country => country.planet = 'Earth');

addPlanet(listCountries);

// console.log(listCountries);


// EXERCISE 2
// Para cada país, crie um objeto apenas com as informação do nome, código da moeda e nome da moeda. Essas informações devem ser armazenadas em um novo array. Faça esse exercício usando o método forEach, não vale map. 

let simplyfiedCountries = [];
listCountries.forEach((country) => {

  const simpleInfosCountry = {
    name: country.name,
    currencyCode: country.currencies[0].code,
    currencyName: country.currencies[0].name,
  };
  simplyfiedCountries.push(simpleInfosCountry);

});

//console.log(simplyfiedCountries);

// EXERCISE 3
//Escreva uma função chamada findCountry que recebe dois parâmetros: o array de países e o nome do país desejado. Ao receber esses valores, a função deve retornar o elemento do país desejado. 
//Caso não seja encontrado, a função deve lançar um erro com a mensagem: “País não encontrado!”.

const findCountry = (countries, countryName) => {
  const specificCountry = countries.find((country) => country.name === countryName);

  if (specificCountry === undefined) {
    return 'País não encontrado!';
  } else {
    return specificCountry;
  }
};

// console.log(findCountry(listCountries, 'China'));

// EXERCISE 4
// Desenvolva uma função que crie uma cópia do array countries e adicione a Alemanha a esse novo array através do spread operator.

const newCountry = {
  name: 'Germany',
  region: 'Europe',
  currencies: [{ code: 'EUR', name: 'Euro' }],
  capital: 'Berlin',
  population: 83190556,
  area: 357386
};

const addNewCountry = (listCountries, newCountry) => [...listCountries, newCountry];

// console.log(addNewCountry(listCountries, newCountry));

//EXERCISE 5
// Desenvolva uma solução para percorrer o array countries e construir uma string para cada país com informações e formatação específicas. 
// As propriedades são passadas como argumentos para a função buildString e adicionadas à string final. 
// A string deverá ser construída com as propriedades name, capital, currencies.code e currencies.name separadas por um -.

const buildString = (listCountries) => { 
  let stringCountries = '';
  listCountries.forEach((country) => {
    stringCountries += `${country.name} - ${country.capital} - ${country.currencies[0].code} - ${country.currencies[0].name} \n`
  });
  return stringCountries;
};

console.log(buildString(listCountries));