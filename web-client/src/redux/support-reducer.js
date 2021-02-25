import { supportAPI } from '../api/api';

const ADD_SUPPORT = 'ADD-SUPPORT';
const SET_SUPPORT = 'SET-SUPPORT';

const initialState = {
  support: [],
  supportList: []
};

const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUPPORT: {
      const newSupport = {
        name: action.name,
        problem: action.problem,
        details: action.details
      };

      return {
        ...state,
        support: [...state.support, newSupport]
      }
    }
    case SET_SUPPORT: {
      return {
        ...state,
        supportList: action.supportList
      }
    }
    default: {
      return state;
    }
  }
};

export default supportReducer;

export const addSupport = (support) => ({ type: ADD_SUPPORT, support });
export const setSupport = (supportList) => ({ type: SET_SUPPORT, supportList });

export const sendSupportRequest = (name, problem, details) => (dispatch) => {
  supportAPI.sendSupport(name, problem, details)
    .then(response => {
      dispatch(addSupport(name, problem, details));
    })
};

export const getSupportsRequest = () => (dispatch) => {
  supportAPI.getSupports()
    .then(response => {
      dispatch(setSupport(response.data));
    });
};
