import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_AUTH_USER = 'SET-AUTH-USER';

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
    default: {
      return state;
    }
  }
};

export const setAuthUser = (isAuth) => ({ type: SET_AUTH_USER, isAuth });

export const loginUser = (email, password) => {
  return (dispatch) => {
    return authAPI.login(email, password)
      .then((response) => {
        localStorage.setItem('token', response.data.values.token);
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
