import axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2/';
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit) => {
  try {
    const {
      data: {
        data: { movies },
      },
    } = await axios(LIST_MOVIES_URL, { params: { limit } });
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovie = async (id) => {
  try {
    const {
      data: {
        data: { movie },
      },
    } = await axios(MOVIE_DETAILS_URL, { params: { movie_id: id } });
    return movie;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
};

export const getSuggestions = async (id) => {
  try {
    const {
      data: {
        data: { movies },
      },
    } = await axios(MOVIE_SUGGESTION_URL, { params: { movie_id: id } });
    return movies;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw error;
  }
};
