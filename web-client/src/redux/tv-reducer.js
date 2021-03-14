import { contentAPI } from "../api/api";
import { tvAPI } from "../api/api.tmdb";

const SET_TODAY_TRENDING_TV = 'SET-TODAY-TRENDING-TV';
const SET_TV_DETAILS = 'SET-TV-DETAILS';
const SET_TV_KEYWORDS = 'SET-TV-KEYWORDS';
const SET_TV_CAST = 'SET-TV-CAST';
const SET_TV_RECOMMENDATIONS = 'SET-TV-RECOMMENDATIONS';
const SET_SIMILAR_TV = 'SET-SIMILAR-TV';
const SET_TV_IMAGES = 'SET-TV-IMAGES';
const SET_TV_VIDEOS = 'SET-TV-VIDEOS';
const SET_GENRES = 'SET-GENRES';
const SET_FAVORITE_SERIAL = 'SET-FAVORITE-SERIAL';
const SET_SUCCESS_SENDING = 'SET-SUCCESS-SENDING';
const SET_TV_DETAILS_BY_USER_ID = 'SET-TV-DETAILS-BY-USER-ID';
const IS_FAVORITE_TV = 'IS-FAVORITE-TV';

const initialState = {
  todayTrendingTV: [],
  tvDetails: [],
  tvKeywords: [],
  TVCast: [],
  tvRecommendations: [],
  similarTV: [],
  tvImages: [],
  tvVideos: [],
  genres: [],
  favoriteSerial: [],
  successSending: false,
  tvDetailsByUserId: [],
  isFavoriteTV: []
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAY_TRENDING_TV: {
      return {
        ...state,
        todayTrendingTV: action.todayTrendingTV
      }
    }
    case SET_TV_DETAILS: {
      return {
        ...state,
        tvDetails: action.tvDetails
      }
    }
    case SET_TV_KEYWORDS: {
      return {
        ...state,
        tvKeywords: action.tvKeywords
      }
    }
    case SET_TV_CAST: {
      return {
        ...state,
        TVCast: action.TVCast
      }
    }
    case SET_TV_RECOMMENDATIONS: {
      return {
        ...state,
        tvRecommendations: action.tvRecommendations
      }
    }
    case SET_SIMILAR_TV: {
      return {
        ...state,
        similarTV: action.similarTV
      }
    }
    case SET_TV_IMAGES: {
      return {
        ...state,
        tvImages: action.tvImages
      }
    }
    case SET_TV_VIDEOS: {
      return {
        ...state,
        tvVideos: action.tvVideos
      }
    }
    case SET_GENRES: {
      return {
        ...state,
        genres: action.genres
      }
    }
    case SET_FAVORITE_SERIAL: {
      return {
        ...state,
        favoriteSerial: action.favoriteSerial
      }
    }
    case SET_SUCCESS_SENDING: {
      return {
        ...state,
        successSending: action.successSending
      }
    }
    case SET_TV_DETAILS_BY_USER_ID: {
      return {
        ...state,
        tvDetailsByUserId: action.tvDetailsByUserId
      }
    }
    case IS_FAVORITE_TV: {
      return {
        ...state,
        isFavoriteTV: action.isFavoriteTV
      }
    }
    default: {
      return state;
    }
  }
};

export default tvReducer;

export const setTodayTrendingTV = (todayTrendingTV) => ({ type: SET_TODAY_TRENDING_TV, todayTrendingTV });
export const setTVDetails = (tvDetails) => ({ type: SET_TV_DETAILS, tvDetails });
export const setTVKeywords = (tvKeywords) => ({ type: SET_TV_KEYWORDS, tvKeywords });
export const setTVCast = (TVCast) => ({ type: SET_TV_CAST, TVCast });
export const setTVRecommendations = (tvRecommendations) => ({ type: SET_TV_RECOMMENDATIONS, tvRecommendations });
export const setSimilarTV = (similarTV) => ({ type: SET_SIMILAR_TV, similarTV });
export const setTVImages = (tvImages) => ({ type: SET_TV_IMAGES, tvImages });
export const setTVVideos = (tvVideos) => ({ type: SET_TV_VIDEOS, tvVideos });
export const setGenres = (genres) => ({ type: SET_GENRES, genres });
export const setFavoriteSerial = (favoriteSerial) => ({ type: SET_FAVORITE_SERIAL, favoriteSerial });
export const setSuccessSending = (successSending) => ({ type: SET_SUCCESS_SENDING, successSending });
export const setIsFavoriteTV = (isFavoriteTV) => ({ type: IS_FAVORITE_TV, isFavoriteTV });
export const setTVDetailsByUserId = (tvDetailsByUserId) => ({ type: SET_TV_DETAILS_BY_USER_ID, tvDetailsByUserId });

export const getTodayTrendingTVRequest = (currentPage) => (dispatch) => {
  tvAPI.getTodayTrendingTV(currentPage)
    .then(response => {
      dispatch(setTodayTrendingTV(response.data.results));
    });
};

export const getTVDetailsRequest = (tvId) => (dispatch) => {
  tvAPI.getTVDetails(tvId)
    .then(response => {
      console.log(response)
      dispatch(setTVDetails(response.data));
    });
};

export const getTVKeywordsRequest = (tvId) => (dispatch) => {
  tvAPI.getTVKeywords(tvId)
    .then(response => {
      dispatch(setTVKeywords(response.data.results));
    });
};

export const getTVCastRequest = (tvId) => (dispatch) => {
  tvAPI.getTVCast(tvId)
    .then(response => {
      dispatch(setTVCast(response.data.cast));
    });
};

export const getTVRecommendationsRequest = (tvId) => (dispatch) => {
  tvAPI.getTVRecommendations(tvId)
    .then(response => {
      dispatch(setTVRecommendations(response.data.results));
    });
};

export const getSimilarTVRequest = (tvId) => (dispatch) => {
  tvAPI.getSimilarTV(tvId)
    .then(response => {
      dispatch(setSimilarTV(response.data.results));
    });
};

export const getTVImagesRequest = (tvId) => (dispatch) => {
  tvAPI.getTVImages(tvId)
    .then(response => {
      dispatch(setTVImages(response.data.backdrops));
    });
};

export const getTVVideosRequest = (tvId) => (dispatch) => {
  tvAPI.getTVVideos(tvId)
    .then(response => {
      dispatch(setTVVideos(response.data.results[0]));
    });
};

export const getGenresRequest = () => (dispatch) => {
  tvAPI.getGenres()
    .then(response => {
      dispatch(setGenres(response.data.genres));
    });
};

export const sendFavoriteSerialRequest = (userId, tvId) => (dispatch) => {
  tvAPI.getTVDetails(tvId)
    .then(response => {
      const {
        id,
        name,
        backdrop_path
      } = response.data;

      contentAPI.sendFavoriteSerial(
        userId,
        id,
        name,
        backdrop_path
      );
      dispatch(setSuccessSending(true));
      dispatch(setIsFavoriteTV(true));
    });
  setTimeout(() => {
    dispatch(setSuccessSending(false));
  }, 5000);
};

export const getFavoriteSerialRequest = (id) => (dispatch) => {
  contentAPI.getFavoriteSerial(id)
    .then(response => {
      dispatch(setFavoriteSerial(response.data));
    })
};

export const getTVDetailsByUserIdRequest = (userId, tvId) => (dispatch) => {
  contentAPI.getTVDetailsByUserId(userId, tvId)
    .then(response => {
      dispatch(setTVDetailsByUserId(response.data.values));
      response.data.length === 0 ? dispatch(setIsFavoriteTV(false)) : dispatch(setIsFavoriteTV(true));
    })
    .catch(() => {
      dispatch(setIsFavoriteTV(false));
    })
};

export const deteleFavoriteTVByUserIdRequest = (userId, tvId) => (dispatch) => {
  contentAPI.deleteFavoriteTVByUserId(userId, tvId)
    .then(() => {
      dispatch(setIsFavoriteTV(false));
    });
};