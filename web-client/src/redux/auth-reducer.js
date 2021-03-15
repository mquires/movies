import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";
import { setAdditionalUserData } from './users-reducer';

const SET_AUTH_USER = 'SET-AUTH-USER';
const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

const initialState = {
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER: {
      return {
        ...state,
        isAuth: action.isAuth
      };
    }
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export const setAuthUser = (isAuth) => ({ type: SET_AUTH_USER, isAuth });
export const setAuthUserData = (userId, email, name, avatarImage, isSetUserAuth) => (
  { type: SET_AUTH_USER_DATA, payload: { userId, email, name, avatarImage, isSetUserAuth } }
);

export const getAuthUserDataRequest = (token) => (dispatch) => {
  return authAPI.authMe(token)
    .then((data) => {
      const {
        userId,
        email,
        name,
        avatarImage
      } = data.data;

      dispatch(setAuthUserData(userId, email, name, avatarImage, true));
    });
}

export const logoutRequest = () => (dispatch) => {
  dispatch(setAuthUserData(null, null, null, null, false));
  dispatch(setAdditionalUserData([]));
}

export const loginUser = (email, password) => {
  return (dispatch) => {
    return authAPI.login(email, password)
      .then((response) => {
        localStorage.setItem('token', response.data.values.token);
        dispatch(getAuthUserDataRequest(localStorage.getItem('token')));
        dispatch(setAuthUser(true));
      })
      .catch(() => {
        dispatch(stopSubmit("login", {
          email: 'E-mail or password are wrong'
        }));
      });
  }
};

export const signupUser = (name, email, password, confirmPassword) => {
  return (dispatch) => {
    if (password !== confirmPassword) {
      dispatch(stopSubmit("registration", { confirmPassword: 'Passwords do not match' }));
    } else {
      authAPI.signup(name, email, password)
        .then((response) => {
          localStorage.setItem('token', response.data.values.token);
          dispatch(getAuthUserDataRequest(localStorage.getItem('token')));
          dispatch(setAuthUser(true));
        })
        .catch(() => {
          dispatch(stopSubmit("registration", {
            email: 'This e-mail already exists'
          }));
        });
    }
  }
};

export const setIsAuth = () => (dispatch) => {
  return localStorage.getItem('token') ?
    dispatch(setAuthUser(true)) :
    dispatch(setAuthUser(false));
};

export default authReducer;
