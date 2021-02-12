import { moviesAPI } from "../api/api.tmdb";

const SET_MOVIES = 'SET-MOVIES';
const SET_TODAY_TRENDING_MOVIES = 'SET-TODAY-TRENDING-MOVIES';
const SET_TOP_RATED_MOVIES = 'SET-TOP-RATED-MOVIES';
const SET_UPCOMING_MOVIES = 'SET-UPCOMING-MOVIES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

const initialState = {
  movies: [],
  genres: [],
  todayTrendingMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  currentPage: 1,
  isFetching: true
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
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
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
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export const getTopRatedMoviesRequest = (currentPage = 1, isFetching) => (dispatch) => {
  moviesAPI.getTopRatedMovies(currentPage)
    .then(response => {
      dispatch(setTopRatedMovies(response.data.results));
      dispatch(setCurrentPage(currentPage + 1));
    })
    .finally(() => dispatch(setIsFetching(false)));
};

export const scrollHandler = (e) => (dispatch) => {
  if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
    dispatch(getTopRatedMoviesRequest(currentPage++));
    //dispatch(setIsFetching(true));
    console.log('123')
    console.log(currentPage)
  }
}

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

export const getUpcomingMoviesRequest = () => (dispatch) => {
  moviesAPI.getUpcomingMovies()
    .then(response => {
      dispatch(setUpcomingMovies(response.data.results));
    });
};
