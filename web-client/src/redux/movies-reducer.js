import { moviesAPI } from "../api/api.tmdb";

const SET_TODAY_TRENDING_MOVIES = 'SET-TODAY-TRENDING-MOVIES';
const SET_TOP_RATED_MOVIES = 'SET-TOP-RATED-MOVIES';
const SET_UPCOMING_MOVIES = 'SET-UPCOMING-MOVIES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_TOP_RATED_FETCHING = 'SET-IS-TOP-RATED-FETCHING';

const initialState = {
  genres: [],
  todayTrendingMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  currentPage: 1,
  isTopRatedFetching: false
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAY_TRENDING_MOVIES: {
      return {
        ...state,
        todayTrendingMovies: action.todayTrendingMovies
      }
    }
    case SET_TOP_RATED_MOVIES: {
      return {
        ...state,
        topRatedMovies: [...state.topRatedMovies, ...action.topRatedMovies]
      }
    }
    case SET_UPCOMING_MOVIES: {
      return {
        ...state,
        upcomingMovies: action.upcomingMovies
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case SET_IS_TOP_RATED_FETCHING: {
      return {
        ...state,
        isTopRatedFetching: action.isTopRatedFetching
      }
    }
    default: {
      return state;
    }
  }
};

export default moviesReducer;

export const setTodayTrendingMovies = (todayTrendingMovies) => ({ type: SET_TODAY_TRENDING_MOVIES, todayTrendingMovies });
export const setTopRatedMovies = (topRatedMovies) => ({ type: SET_TOP_RATED_MOVIES, topRatedMovies });
export const setUpcomingMovies = (upcomingMovies) => ({ type: SET_UPCOMING_MOVIES, upcomingMovies });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setIsTopRatedFetching = (isTopRatedFetching) => ({ type: SET_IS_TOP_RATED_FETCHING, isTopRatedFetching });

export const getTopRatedMoviesRequest = (currentPage) => (dispatch) => {
  moviesAPI.getTopRatedMovies(currentPage)
    .then(response => {
      dispatch(setIsTopRatedFetching(true));
      dispatch(setTopRatedMovies(response.data.results));
      dispatch(setIsTopRatedFetching(false));
    })
};

export const getTodayTrendingMoviesRequest = (currentPage) => (dispatch) => {
  moviesAPI.getTodayTrendingMovies(currentPage)
    .then(response => {
      dispatch(setTodayTrendingMovies(response.data.results));
    });
};

export const getUpcomingMoviesRequest = (currentPage) => (dispatch) => {
  moviesAPI.getUpcomingMovies(currentPage)
    .then(response => {
      dispatch(setUpcomingMovies(response.data.results));
    });
};
