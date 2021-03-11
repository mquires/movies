import { contentAPI } from "../api/api";
import { personsAPI } from "../api/api.tmdb";

const SET_POPULAR_PERSONS = 'SET-POPULAR-PERSONS';
const SET_IS_FETCHING = 'SET-IS-FETCHING';
const SET_PERSON_DETAILS = 'SET-PERSON-DETAILS';
const SET_PERSON_MOVIE_CREDITS = 'SET-PERSON-MOVIE-CREDITS';
const SET_FAVORITE_PERSONS = 'SET-FAVORITE-PERSON';
const SET_SUCCESS_SENDING = 'SET-SUCCESS-SENDING';

const initialState = {
  popularPersons: [],
  isFetching: false,
  personDetails: [],
  personMovieCredits: [],
  favoritePerson: [],
  successSending: false
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
    case SET_FAVORITE_PERSONS: {
      return {
        ...state,
        favoritePerson: action.favoritePerson
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

export default personsReducer;

export const setPopularPersons = (popularPersons) => ({ type: SET_POPULAR_PERSONS, popularPersons });
export const setIsFetching = (isFetching) => ({ type: SET_IS_FETCHING, isFetching });
export const setPersonDetails = (personDetails) => ({ type: SET_PERSON_DETAILS, personDetails });
export const setPersonMovieCredits = (personMovieCredits) => ({ type: SET_PERSON_MOVIE_CREDITS, personMovieCredits });
export const setFavoritePersons = (favoritePerson) => ({ type: SET_FAVORITE_PERSONS, favoritePerson });
export const setSuccessSending = (successSending) => ({ type: SET_SUCCESS_SENDING, successSending });

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

export const sendFavoritePersonRequest = (userId, personId) => (dispatch) => {
  personsAPI.getPersonDetails(personId)
    .then(response => {
      const {
        id,
        name,
        profile_path
      } = response.data;

      contentAPI.sendFavoritePerson(
        userId,
        id,
        name,
        profile_path
      );
      dispatch(setSuccessSending(true));
    });
  setTimeout(() => {
    dispatch(setSuccessSending(false));
  }, 5000);
};

export const getFavoritePersonRequest = (id) => (dispatch) => {
  contentAPI.getFavoritePerson(id)
    .then(response => {
      dispatch(setFavoritePersons(response.data));
    })
};
