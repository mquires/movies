import { moviesAPI } from "../api/api.tmdb";

const SET_MOVIES = 'SET-MOVIES';
const SET_TODAY_TRENDING_MOVIES = 'SET-TODAY-TRENDING-MOVIES';
const SET_TOP_RATED_MOVIES = 'SET-TOP-RATED-MOVIES';
const SET_UPCOMING_MOVIES = 'SET-UPCOMING-MOVIES';

const initialState = {
  movies: [],
  genres: [],
  todayTrendingMovies: [],
  topRatedMovies: [],
  upcomingMovies: []
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        movies: action.movies
      }
    }
    case SET_TODAY_TRENDING_MOVIES: {
      return {
        ...state,
        todayTrendingMovies: action.todayTrendingMovies
      }
    }
    case SET_TOP_RATED_MOVIES: {
      return {
        ...state,
        topRatedMovies: action.topRatedMovies
      }
    }
    case SET_UPCOMING_MOVIES: {
      return {
        ...state,
        upcomingMovies: action.upcomingMovies
      }
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;

export const setMovies = (movies) => ({ type: SET_MOVIES, movies });
export const setTodayTrendingMovies = (todayTrendingMovies) => ({ type: SET_TODAY_TRENDING_MOVIES, todayTrendingMovies });
export const setTopRatedMovies = (topRatedMovies) => ({ type: SET_TOP_RATED_MOVIES, topRatedMovies });
export const setUpcomingMovies = (upcomingMovies) => ({ type: SET_UPCOMING_MOVIES, upcomingMovies });

export const getMoviesRequest = () => (dispatch) => {
  moviesAPI.getMovies()
    .then(response => {
      dispatch(setMovies(response.data.results));
    });
};

export const getTodayTrendingMoviesRequest = () => (dispatch) => {
  moviesAPI.getTodayTrendingMovies()
    .then(response => {
      dispatch(setTodayTrendingMovies(response.data.results));
    });
};

export const findMovieRequest = (query) => (dispatch) => {
  moviesAPI.findMovie(query)
    .then(response => {
      dispatch(setMovies(response.data.results));
    });
};

export const getTopRatedMoviesRequest = () => (dispatch) => {
  moviesAPI.getTopRatedMovies()
    .then(response => {
      dispatch(setTopRatedMovies(response.data.results));
    });
};

export const getUpcomingMoviesRequest = () => (dispatch) => {
  moviesAPI.getUpcomingMovies()
    .then(response => {
      dispatch(setUpcomingMovies(response.data.results));
    });
};
