import { getMovie, getMovies, getSuggestions } from './fetchData.js';

const resolvers = {
  Query: {
    movies: (_, { limit }) => getMovies(limit),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
  // Mutation: {
  //   addMovie: (_, { name, score }) => addMovie(name, score),
  //   deleteMovie: (_, { id }) => deleteMovie(id),
  // },
};
export { resolvers };
