const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Aland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];
//EXERCISE 1
// Crie a função getPopulation que retorne a quantidade total da população de todos os países.

const getPopulation = (countries) => countries.reduce((acc, country) => acc + country.population,0);

// console.log(getPopulation(countries));

//EXERCISE 2
// 🚀 Crie a função longestName que deve retornar o país com o maior nome.

const longestName = (countries) => countries.reduce((acc, country) => (country.name.length > acc.name.length) ? country : acc);

// console.log(longestName(countries));

//EXERCISE 3
//  Crie uma função chamada totalAreaByRegion que recebe um parâmetro opcional region com o valor padrão ‘Europe’. Essa função calcula e retorna a área total de todos os países de uma determinada região.

const totalAreaByRegion = (countries, region = 'Europe') => countries.reduce((acc, country) => (country.region === region) ? acc + country.area : acc, 0);

// console.log(totalAreaByRegion(countries));

//EXERCISE 4
// Crie uma função chamada getLargestCountriesByRegion que retorna um objeto contendo os países com a maior área em cada região. O objeto de retorno deve ter a seguinte estrutura:

const getLargestCountriesByRegion = (countries) => {
  const largestsCountryInRegions = countries.reduce((acc, country) => {
    if (!acc[country.region] || country.area > acc[country.region].area) {
      acc[country.region] = {name: country.name, area: country.area};
    }
    return acc;
  }, {});

  return largestsCountryInRegions;
};

console.log(getLargestCountriesByRegion(countries));