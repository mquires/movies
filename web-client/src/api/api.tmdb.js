import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.themoviedb.org/3/',
  headers: {
    'API-KEY': 'e76fd28bc6d77e87ebae191d64a73110'
  }
});

export const moviesAPI = {
  getMovies() {
    return instance.get('discover/movie?api_key=e76fd28bc6d77e87ebae191d64a73110');
  }
};