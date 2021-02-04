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
      });
  }
}

export const signupUser = (name, email, password) => {
  return (dispatch) => {
    return authAPI.signup(name, email, password)
      .then((response) => {
        localStorage.setItem('token', response.data.values.token);
        dispatch(setAuthUser(true));
      });
  }
}

export default authReducer;
