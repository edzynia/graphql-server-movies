import { movies } from './db.js';

export const getMovies = () => movies;

export const getById = (id) => {
  return movies.find((movie) => movie.id === id);
};
export const deleteMovie = (id) => {
  let newMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > newMovies.length) {
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    name,
    score,
    id: movies.length + 1,
  };
  movies.push(newMovie);
  return newMovie;
};
