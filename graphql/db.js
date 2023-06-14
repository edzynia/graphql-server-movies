const API_URL_LIMIT = (limit) =>
  limit ? `${BASE_URL}?limit=${limit}` : API_URL;

export let movies = [
  {
    name: 'Fast X (2023)',
    id: 1,
    score: 5,
  },
  {
    name: 'John Wick: Chapter 4 (2023)',
    id: 2,
    score: 8,
  },
  {
    name: 'The Super Mario Bros. Movie (2023)',
    id: 3,
    score: 5,
  },
  {
    name: 'Hypnotic (2023)',
    id: 4,
    score: 8,
  },
  {
    name: 'Transformers: Rise of the Beasts (2023)',
    id: 5,
    score: 5,
  },
  {
    name: 'Operation Seawolf (2022)',
    id: 6,
    score: 8,
  },
  {
    name: 'Avatar: The Way of Water (2022)',
    id: 7,
    score: 5,
  },
  {
    name: 'The Black Demon (2023)',
    id: 8,
    score: 8,
  },
];
