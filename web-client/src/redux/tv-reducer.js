import { tvAPI } from "../api/api.tmdb";

const SET_TODAY_TRENDING_TV = 'SET-TODAY-TRENDING-TV';
const SET_TV_DETAILS = 'SET-TV-DETAILS';
const SET_TV_KEYWORDS = 'SET-TV-KEYWORDS';
const SET_TV_CAST = 'SET-TV-CAST';
const SET_TV_RECOMMENDATIONS = 'SET-TV-RECOMMENDATIONS';
const SET_SIMILAR_TV = 'SET-SIMILAR-TV';
const SET_TV_IMAGES = 'SET-TV-IMAGES';

const initialState = {
  todayTrendingTV: [],
  tvDetails: [],
  tvKeywords: [],
  TVCast: [],
  tvRecommendations: [],
  similarTV: [],
  tvImages: []
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

export const getTodayTrendingTVRequest = (currentPage) => (dispatch) => {
  tvAPI.getTodayTrendingTV(currentPage)
    .then(response => {
      dispatch(setTodayTrendingTV(response.data.results));
    });
};

export const getTVDetailsRequest = (tvId) => (dispatch) => {
  tvAPI.getTVDetails(tvId)
    .then(response => {
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