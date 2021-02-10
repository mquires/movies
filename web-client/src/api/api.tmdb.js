import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3/'
});

const API_KEY = 'e76fd28bc6d77e87ebae191d64a73110';

export const moviesAPI = {
  getMovies() {
    return instance.get(`discover/movie?api_key=${API_KEY}`);
  },

  getGengres() {
    return instance.get(`genre/movie/list?api_key=${API_KEY}`);
  },

  getTodayTrendingMovies() {
    return instance.get(`trending/movie/day?api_key=${API_KEY}`);
  },

  findMovie(query) {
    return instance.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  }
};