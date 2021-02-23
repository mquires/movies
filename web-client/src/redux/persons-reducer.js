import { personsAPI } from "../api/api.tmdb";

const SET_POPULAR_PERSONS = 'SET-POPULAR-PERSONS';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_PERSON_DETAILS = 'SET-PERSON-DETAILS';
const SET_PERSON_MOVIE_CREDITS = 'SET-PERSON-MOVIE-CREDITS';

const initialState = {
  popularPersons: [],
  isFetching: false,
  personDetails: [],
  personMovieCredits: []
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
    case SET_PERSON_DETAILS: {
      return {
        ...state,
        personDetails: action.personDetails
      }
    }
    case SET_PERSON_MOVIE_CREDITS: {
      return {
        ...state,
        personMovieCredits: action.personMovieCredits
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
export const setPersonDetails = (personDetails) => ({ type: SET_PERSON_DETAILS, personDetails });
export const setPersonMovieCredits = (personMovieCredits) => ({ type: SET_PERSON_MOVIE_CREDITS, personMovieCredits });

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

export const getPersonDetailsRequest = (personId) => (dispatch) => {
  personsAPI.getPersonDetails(personId)
    .then(response => {
     dispatch(setPersonDetails(response.data));
    });
};

export const getPersonMovieCreditsRequest = (personId) => (dispatch) => {
  personsAPI.getPersonMovieCredits(personId)
    .then(response => {
     dispatch(setPersonMovieCredits(response.data.cast));
    });
};
