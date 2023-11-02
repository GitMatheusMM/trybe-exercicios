const cartoons = [
  {
    title: 'Tom and Jerry',
    episodes: 114,
    popularity: 9
  },
  {
    title: 'Looney Tunes',
    episodes: 175,
    popularity: 8
  },
  {
    title: 'Scooby-Doo',
    episodes: 390,
    popularity: 10
  },
  {
    title: 'The Simpsons',
    episodes: 700,
    popularity: 9
  },
  {
    title: 'Avatar: The Last Airbender',
    episodes: 61,
    popularity: 10
  },
  {
    title: 'Pokémon',
    episodes: 1100,
    popularity: 9
  },
  {
    title: 'Adventure Time',
    episodes: 283,
    popularity: 8
  },
  {
    title: 'Dragon Ball Z',
    episodes: 291,
    popularity: 9
  }
];
// RESOLUTION 1
const cartoonSummary = cartoons.reduce((acc, cartoon) => {
  acc.titles = cartoons.length;
  acc.totalEpisodes += cartoon.episodes;
  acc.averagePopularity = (cartoons.reduce((acc, cartoon) => (acc +cartoon.popularity), 0)) / cartoons.length;

  return acc;
},{titles:0, totalEpisodes:0, averagePopularity: 0,});

console.log(cartoonSummary);

// RESOLUTION 2
const cartoonsReport = cartoons.reduce(() => ({
  titles: cartoons.length,
  totalEpisodes: cartoons.reduce((acc, cartoon) => acc + cartoon.episodes, 0),
  averagePopularity: (cartoons.reduce((acc, cartoon) => (acc + cartoon.popularity), 0)) / cartoons.length,
}), {});

console.log(cartoonsReport);