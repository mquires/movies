import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3500/api/'
});

export const authAPI = {
  login(email, password) {
    return instance.post('auth/signin', { email, password });
  },
  
  signup(name, email, password) {
    return instance.post('auth/signup', { name, email, password })
  }
};