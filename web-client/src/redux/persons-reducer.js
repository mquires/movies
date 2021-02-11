import { personsAPI } from "../api/api.tmdb";

const SET_POPULAR_PERSONS = 'SET-POPULAR-PERSONS';

const initialState = {
  popularPersons: []
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_PERSONS: {
      return {
        ...state,
        popularPersons: action.popularPersons
      }
    }
    default: {
      return state;
    }
  }
};

export default personsReducer;

export const setPopularPersons = (popularPersons) => ({ type: SET_POPULAR_PERSONS, popularPersons });

export const getPopularPersonsRequest = () => (dispatch) => {
  personsAPI.getPopularPersons()
    .then(response => {
      dispatch(setPopularPersons(response.data.results));
    });
};
