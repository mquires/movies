import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3/'
});

const API_KEY = 'e76fd28bc6d77e87ebae191d64a73110';

export const moviesAPI = {
  getMovies(currentPage) {
    return instance.get(`discover/movie?api_key=${API_KEY}&page=${currentPage}`);
  },

  getGengres() {
    return instance.get(`genre/movie/list?api_key=${API_KEY}`);
  },

  getTodayTrendingMovies(currentPage) {
    return instance.get(`trending/movie/day?api_key=${API_KEY}&page=${currentPage}`);
  },

  findMovie(query) {
    return instance.get(`search/movie?api_key=${API_KEY}&query=${query}`);
  },

  getTopRatedMovies(currentPage) {
    return instance.get(`movie/top_rated?api_key=${API_KEY}&page=${currentPage}`);
  },

  getUpcomingMovies(currentPage) {
    return instance.get(`movie/upcoming?api_key=${API_KEY}&page=${currentPage}`);
  },

  getMovieDetails(movieId) {
    return instance.get(`movie/${movieId}?api_key=${API_KEY}`);
  },

  getRecommendations(movieId) {
    return instance.get(`movie/${movieId}/recommendations?api_key=${API_KEY}`);
  },

  getMovieImages(movieId) {
    return instance.get(`movie/${movieId}/images?api_key=${API_KEY}`);
  },

  getSimilarMovies(movieId) {
    return instance.get(`movie/${movieId}/similar?api_key=${API_KEY}`);
  },

  getMoviesKeywords(movieId) {
    return instance.get(`movie/${movieId}/keywords?api_key=${API_KEY}`);
  },

  getMoviesCast(movieId) {
    return instance.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
  }
};

export const personsAPI = {
  getPopularPersons(currentPage) {
    return instance.get(`person/popular?api_key=${API_KEY}&page=${currentPage}`);
  },

  findPerson(query) {
    return instance.get(`search/person?api_key=${API_KEY}&query=${query}`);
  }
};

export const tvAPI = {
  getTV(currentPage) {
    return instance.get(`discover/tv?api_key=${API_KEY}&page=${currentPage}`);
  },

  findTV(query) {
    return instance.get(`search/tv?api_key=${API_KEY}&query=${query}`);
  },

  getTodayTrendingTV(currentPage) {
    return instance.get(`trending/tv/day?api_key=${API_KEY}&page=${currentPage}`);
  },
};