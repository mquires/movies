import { contentAPI } from "../api/api";
import { moviesAPI } from "../api/api.tmdb";

const SET_TODAY_TRENDING_MOVIES = 'SET-TODAY-TRENDING-MOVIES';
const SET_TOP_RATED_MOVIES = 'SET-TOP-RATED-MOVIES';
const SET_UPCOMING_MOVIES = 'SET-UPCOMING-MOVIES';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_IS_TOP_RATED_FETCHING = 'SET-IS-TOP-RATED-FETCHING';
const SET_MOVIE_DETAILS = 'SET-MOVIE-DETAILS';
const SET_RECOMMENDATIONS = 'SET-RECOMMENDATIONS';
const SET_MOVIE_IMAGES = 'SET-MOVIE-IMAGES';
const SET_SIMILAR_MOVIES = 'SET-SIMILAR-MOVIES';
const SET_MOVIES_KEYWORDS = 'SET-MOVIES-KEYWORDS';
const SET_MOVIES_CAST = 'SET-MOVIES-CAST';
const SET_MOVIE_VIDEOS = 'SET-MOVIE-VIDEOS';
const SET_GENRES = 'SET-GENRES';
const SET_LATEST_MOVIES = 'SET-LATEST-MOVIES';
const SET_FAVORITE_MOVIE = 'SET-FAVORITE-MOVIE';

const initialState = {
  genres: [],
  todayTrendingMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  currentPage: 1,
  isTopRatedFetching: false,
  movieDetails: null,
  recommendations: [],
  movieImages: [],
  similarMovies: [],
  moviesKeywords: [],
  moviesCast: [],
  movieVideos: [],
  latestMovies: [],
  favoriteMovie: []
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
    case SET_MOVIE_DETAILS: {
      return {
        ...state,
        movieDetails: action.movieDetails
      }
    }
    case SET_RECOMMENDATIONS: {
      return {
        ...state,
        recommendations: action.recommendations
      }
    }
    case SET_MOVIE_IMAGES: {
      return {
        ...state,
        movieImages: action.movieImages
      }
    }
    case SET_SIMILAR_MOVIES: {
      return {
        ...state,
        similarMovies: action.similarMovies
      }
    }
    case SET_MOVIES_KEYWORDS: {
      return {
        ...state,
        moviesKeywords: action.moviesKeywords
      }
    }
    case SET_MOVIES_CAST: {
      return {
        ...state,
        moviesCast: action.moviesCast
      }
    }
    case SET_MOVIE_VIDEOS: {
      return {
        ...state,
        movieVideos: action.movieVideos
      }
    }
    case SET_GENRES: {
      return {
        ...state,
        genres: action.genres
      }
    }
    case SET_LATEST_MOVIES: {
      return {
        ...state,
        latestMovies: action.latestMovies
      }
    }
    case SET_FAVORITE_MOVIE: {
      return {
        ...state,
        favoriteMovie: action.favoriteMovie
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
export const setMovieDetails = (movieDetails) => ({ type: SET_MOVIE_DETAILS, movieDetails });
export const setRecommendations = (recommendations) => ({ type: SET_RECOMMENDATIONS, recommendations });
export const setMovieImages = (movieImages) => ({ type: SET_MOVIE_IMAGES, movieImages });
export const setSimilarMovies = (similarMovies) => ({ type: SET_SIMILAR_MOVIES, similarMovies });
export const setMoviesKeywords = (moviesKeywords) => ({ type: SET_MOVIES_KEYWORDS, moviesKeywords });
export const setMoviesCast = (moviesCast) => ({ type: SET_MOVIES_CAST, moviesCast });
export const setMovieVideos = (movieVideos) => ({ type: SET_MOVIE_VIDEOS, movieVideos });
export const setGenres = (genres) => ({ type: SET_GENRES, genres });
export const setLatestMovies = (latestMovies) => ({ type: SET_LATEST_MOVIES, latestMovies });
export const setFavoriteMovie = (favoriteMovie) => ({ type: SET_FAVORITE_MOVIE, favoriteMovie });

export const getTopRatedMoviesRequest = (currentPage) => (dispatch) => {
  moviesAPI.getTopRatedMovies(currentPage)
    .then(response => {
      dispatch(setIsTopRatedFetching(true));
      dispatch(setTopRatedMovies(response.data.results));
      dispatch(setIsTopRatedFetching(false));
    });
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

export const getMovieDetailsRequest = (movieId) => (dispatch) => {
  moviesAPI.getMovieDetails(movieId)
    .then(response => {
      dispatch(setMovieDetails(response.data));
    });
};

export const getRecommendationsRequest = (movieId) => (dispatch) => {
  moviesAPI.getRecommendations(movieId)
    .then(response => {
      dispatch(setRecommendations(response.data.results));
    });
};

export const getMovieImagesRequest = (movieId) => (dispatch) => {
  moviesAPI.getMovieImages(movieId)
    .then(response => {
      dispatch(setMovieImages(response.data.backdrops));
    });
};

export const getSimilarMoviesRequest = (movieId) => (dispatch) => {
  moviesAPI.getSimilarMovies(movieId)
    .then(response => {
      dispatch(setSimilarMovies(response.data.results));
    });
};

export const getMoviesKeywordsRequest = (movieId) => (dispatch) => {
  moviesAPI.getMoviesKeywords(movieId)
    .then(response => {
      dispatch(setMoviesKeywords(response.data.keywords));
    });
};

export const getMoviesCastRequest = (movieId) => (dispatch) => {
  moviesAPI.getMoviesCast(movieId)
    .then(response => {
      dispatch(setMoviesCast(response.data.cast));
    });
};

export const getMovieVideosRequest = (movieId) => (dispatch) => {
  moviesAPI.getMovieVideos(movieId)
    .then(response => {
      dispatch(setMovieVideos(response.data.results[0]));
    });
};

export const getGenresRequest = () => (dispatch) => {
  moviesAPI.getGenres()
    .then(response => {
      dispatch(setGenres(response.data.genres));
    });
};

export const getLatestMoviesRequest = () => (dispatch) => {
  moviesAPI.getLatestMovies()
    .then(response => {
      dispatch(setLatestMovies(response.data));
    });
};

export const sendFavoriteMovieRequest = (userId, movieId) => () => {
  moviesAPI.getMovieDetails(movieId)
    .then(response => {
      const {
        id,
        original_title,
        backdrop_path
      } = response.data;

      contentAPI.sendFavoriteMovie(
        userId,
        id,
        original_title,
        backdrop_path
      );
    })
};

export const getFavoriteMovieRequest = (id) => (dispatch) => {
  contentAPI.getFavoriteMovie(id)
    .then(response => {
      console.log(response)
      dispatch(setFavoriteMovie(response.data));
    })
};
