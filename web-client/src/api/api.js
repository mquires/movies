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

export const contentAPI = {
  sendWatchLaterMovie(id, movieId, original_title, poster_path, original_language, overview, release_date) {
    return instance.post(`${id}/add-watch-later`, { movieId, original_title, poster_path, original_language, overview, release_date });
  },

  getWatchLaterMovies(id) {
    return instance.get(`${id}/get-watch-later`);
  },

  sendWatchLaterTV(id, tvId, name, poster_path, overview, first_air_date) {
    return instance.post(`${id}/add-watch-later-tv`, { tvId, name, poster_path, overview, first_air_date });
  },

  getWatchLaterTV(id) {
    return instance.get(`${id}/get-watch-later-tv`);
  },

  sendFavoritePerson(id, personId, name, profile_path) {
    return instance.post(`${id}/add-favorite-person`, { personId, name, profile_path });
  },

  getFavoritePerson(id) {
    return instance.get(`${id}/get-favorite-person`);
  },

  sendFavoriteMovie(id, movieId, original_title, backdrop_path) {
    return instance.post(`${id}/add-favorite-movie`, { movieId, original_title, backdrop_path });
  },

  getFavoriteMovie(id) {
    return instance.get(`${id}/get-favorite-movie`);
  }
};

export const messagesAPI = {
  sendMessage(senderEmail, receiverEmail, message) {
    return instance.post(``, { senderEmail, receiverEmail, message });
  },

  getMessages(senderEmail, receiverEmail) {
    return instance.post(`get-messages`, { senderEmail, receiverEmail });
  }
};