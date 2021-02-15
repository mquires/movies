import { personsAPI } from "../api/api.tmdb";

const SET_POPULAR_PERSONS = 'SET-POPULAR-PERSONS';
const SET_IS_FETCHING = 'SET-IS-FETCHING';

const initialState = {
  popularPersons: [],
  isFetching: false
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_PERSONS: {
      return {
        ...state,
        popularPersons: action.popularPersons
      }
    }
    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    default: {
      return state;
    }
  }
};

export default personsReducer;

export const setPopularPersons = (popularPersons) => ({ type: SET_POPULAR_PERSONS, popularPersons });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });

export const getPopularPersonsRequest = () => (dispatch) => {
  personsAPI.getPopularPersons()
    .then(response => {
      dispatch(setIsFetching(true));
      dispatch(setPopularPersons(response.data.results));
      dispatch(setIsFetching(false));
    });
};

export const findPersonRequest = (query) => (dispatch) => {
  personsAPI.findPerson(query)
    .then(response => {
      dispatch(setPopularPersons(response.data.results));
    });
};
