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
  },

  authMe(token) {
    return instance.get(`auth-me?token=${token}`)
  }
};

export const usersAPI = {
  getAllUsers() {
    return instance.get('users');
  },

  getUserById(id) {
    return instance.get(`user/${id}`);
  },

  getUserByEmail(email) {
    return instance.get(`user?email=${email}`);
  },

  getUserData(id) {
    return instance.get(`user-data?id=${id}`);
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
  },

  addAdditionalUserData(id, bio, gender, nickname, phone, website) {
    return instance.post(`update-user?userId=${id}`, { bio, gender, nickname, phone, website });
  },

  getAdditionalUserData(id) {
    return instance.get(`get-additional-user-data?userId=${id}`);
  },

  deleteUser(token) {
    return instance.delete(`delete-user?token=${token}`);
  },

  applyUserVerification(token, category, country, general, wikiArticle, website, socialNetworks) {
    return instance.post(`apply-user-verification?token=${token}`, { category, country, general, wikiArticle, website, socialNetworks });
  }
};

export const verificationAPI = {
  getAllUsersVerificationApplications() {
    return instance.get('get-user-verification-applications');
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
  },

  sendFavoriteSerial(id, tvId, name, backdrop_path) {
    return instance.post(`${id}/add-favorite-serial`, { tvId, name, backdrop_path });
  },

  getFavoriteSerial(id) {
    return instance.get(`${id}/get-favorite-serial`);
  },

  getMovieDetailsByUserId(userId, movieId) {
    return instance.get(`movie-details?userId=${userId}&movieId=${movieId}`);
  },

  deleteFavoriteMovieByUserId(userId, movieId) {
    return instance.delete(`delete-favorite-movie?userId=${userId}&movieId=${movieId}`);
  },

  getTVDetailsByUserId(userId, tvId) {
    return instance.get(`tv-details?userId=${userId}&tvId=${tvId}`);
  },

  deleteFavoriteTVByUserId(userId, tvId) {
    return instance.delete(`delete-favorite-tv?userId=${userId}&tvId=${tvId}`);
  },

  getPersonDetailsByUserId(userId, personId) {
    return instance.get(`person-details?userId=${userId}&personId=${personId}`);
  },

  deleteFavoritePersonByUserId(userId, personId) {
    return instance.delete(`delete-favorite-person?userId=${userId}&personId=${personId}`);
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

export const commentsAPI = {
  sendMovieComment(movieId, comment, UserId) {
    return instance.post('add-movie-comment', { movieId, comment, UserId });
  },

  getMovieComments(id) {
    return instance.get(`${id}/get-movie-comments`);
  }
};