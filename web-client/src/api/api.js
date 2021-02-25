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

export const usersAPI = {
  getAllUsers() {
    return instance.get('users');
  },

  getUserById(id) {
    return instance.get(`user/${id}`);
  },

  getPostsById(id) {
    return instance.get(`user/${id}/posts`);
  },

  addPost(id, post) {
    return instance.post(`user/${id}/add-post`, { id, post });
  },

  addReport(id, report, name) {
    return instance.post(`user/${id}/add-report`, { id, report, name });
  },

  getAllReports() {
    return instance.get('get-reports');
  }
};

export const feedbackAPI = {
  sendFeedback(name, email, comments, feedbackType) {
    return instance.post('add-feedback', { name, email, comments, feedbackType });
  },

  getFeedbacks() {
    return instance.get('get-feedback');
  }
};

export const supportAPI = {
  sendSupport(name, problem, details) {
    return instance.post('add-support', { name, problem, details });
  },

  getSupports() {
    return instance.get('get-supports');
  }
};