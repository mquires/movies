import { tvAPI } from "../api/api.tmdb";

const SET_TV = 'SET-TV';
const SET_TODAY_TRENDING_TV = 'SET-TODAY-TRENDING-TV';

const initialState = {
  tv: [],
  todayTrendingTV: []
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TV: {
      return {
        ...state,
        tv: action.tv
      }
    }
    case SET_TODAY_TRENDING_TV: {
      return {
        ...state,
        todayTrendingTV: action.todayTrendingTV
      }
    }
    default: {
      return state;
    }
  }
};

export default tvReducer;

export const setTV = (tv) => ({ type: SET_TV, tv });
export const setTodayTrendingTV = (todayTrendingTV) => ({ type: SET_TODAY_TRENDING_TV, todayTrendingTV });

export const getTVRequest = () => (dispatch) => {
  tvAPI.getTV()
    .then(response => {
      dispatch(setTV(response.data.results));
    });
};

export const findTVRequest = (query) => (dispatch) => {
  tvAPI.findTV(query)
    .then(response => {
      dispatch(setTV(response.data.results));
    });
};

export const getTodayTrendingTVRequest = () => (dispatch) => {
  tvAPI.getTodayTrendingTV()
    .then(response => {
      dispatch(setTodayTrendingTV(response.data.results));
    });
};