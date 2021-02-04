import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET-AUTH-USER-DATA';

const initialState = {
  id: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
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

export const setAuthUserData = (id, email, isAuth) => ({ type: SET_AUTH_USER_DATA, payload: { id, email, isAuth } });

export default authReducer;
