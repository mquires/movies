import { contentAPI } from "../api/api";
import { moviesAPI, tvAPI } from "../api/api.tmdb";

const SET_WATCH_LATER_ITEM = 'SET-WATCH-LATER-ITEM';
const SET_WATCH_LATER_TV_ITEM = 'SET-WATCH-LATER-TV-ITEM';
const SET_SUCCESS_SENDING = 'SET-SUCCESS-SENDING';

const initialState = {
  watchLater: [],
  watchLaterTV: [],
  successSending: false
};

const watchLaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WATCH_LATER_ITEM: {
      return {
        ...state,
        watchLater: action.watchLater
      }
    }
    case SET_WATCH_LATER_TV_ITEM: {
      return {
        ...state,
        watchLaterTV: action.watchLaterTV
      }
    }
    case SET_SUCCESS_SENDING: {
      return {
        ...state,
        successSending: action.successSending
      }
    }
    default: {
      return state;
    }
  }
};

export default watchLaterReducer;

export const setWatchLater = (watchLater) => ({ type: SET_WATCH_LATER_ITEM, watchLater });
export const setWatchLaterTV = (watchLaterTV) => ({ type: SET_WATCH_LATER_TV_ITEM, watchLaterTV });
export const setSuccessSending = (successSending) => ({ type: SET_SUCCESS_SENDING, successSending });

export const sendWatchLaterRequest = (userId, movieId) => (dispatch) => {
  moviesAPI.getMovieDetails(movieId)
    .then(response => {
      const {
        id,
        original_title,
        backdrop_path,
        original_language,
        overview,
        release_date
      } = response.data;

      contentAPI.sendWatchLaterMovie(
        userId,
        id,
        original_title,
        backdrop_path,
        original_language,
        overview.substr(0, 30),
        release_date
      );
      dispatch(setSuccessSending(true));
    });
  setTimeout(() => {
    dispatch(setSuccessSending(false));
  }, 5000);
};

export const getWatchLaterRequest = (id) => (dispatch) => {
  contentAPI.getWatchLaterMovies(id)
    .then(response => {
      dispatch(setWatchLater(response.data));
    })
};

export const sendWatchLaterTVRequest = (userId, tvId) => (dispatch) => {
  tvAPI.getTVDetails(tvId)
    .then(response => {
      const {
        id,
        name,
        backdrop_path,
        overview,
        first_air_date
      } = response.data;

      contentAPI.sendWatchLaterTV(
        userId,
        id,
        name,
        backdrop_path,
        overview.substr(0, 30),
        first_air_date
      );
      dispatch(setSuccessSending(true));
    });
  setTimeout(() => {
    dispatch(setSuccessSending(false));
  }, 5000);
};

export const getWatchLaterTVRequest = (id) => (dispatch) => {
  contentAPI.getWatchLaterTV(id)
    .then(response => {
      dispatch(setWatchLaterTV(response.data));
    })
};
