import { moviesAPI } from "../api/api.tmdb";

const SET_MOVIES = 'SET-MOVIES';

const initialState = {
  movies: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        movies: action.movies
      }
    }

    default: {
      return state;
    }
  }
};

export default moviesReducer;

export const setMovies = (movies) => ({ type: SET_MOVIES, movies });

export const getMoviesRequest = () => (dispatch) => {
  moviesAPI.getMovies()
    .then(response => {
      dispatch(setMovies(response.data.results));
    });
};
