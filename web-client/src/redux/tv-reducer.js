import { tvAPI } from "../api/api.tmdb";

const SET_TODAY_TRENDING_TV = 'SET-TODAY-TRENDING-TV';

const initialState = {
  todayTrendingTV: []
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
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

export const setTodayTrendingTV = (todayTrendingTV) => ({ type: SET_TODAY_TRENDING_TV, todayTrendingTV });

export const getTodayTrendingTVRequest = (currentPage) => (dispatch) => {
  tvAPI.getTodayTrendingTV(currentPage)
    .then(response => {
      dispatch(setTodayTrendingTV(response.data.results));
    });
};