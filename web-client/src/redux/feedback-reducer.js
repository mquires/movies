import { feedbackAPI } from '../api/api';

const ADD_FEEDBACK = 'ADD-FEEDBACK';
const SET_FEEDBACK = 'SET-FEEDBACK';

const initialState = {
  feedback: [],
  feedbackList: []
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEEDBACK: {
      const newFeedback = {
        name: action.name,
        email: action.email,
        comments: action.comments,
        feedbackType: action.feedbackType,
      };

      return {
        ...state,
        feedback: [...state.feedback, newFeedback]
      }
    }
    case SET_FEEDBACK: {
      return {
        ...state,
        feedbackList: action.feedbackList
      }
    }
    default: {
      return state;
    }
  }
};

export default feedbackReducer;

export const addFeedback = (feedback) => ({ type: ADD_FEEDBACK, feedback });
export const setFeedback = (feedbackList) => ({ type: SET_FEEDBACK, feedbackList });

export const sendFeedbackRequest = (name, email, comments, feedbackType) => (dispatch) => {
  feedbackAPI.sendFeedback(name, email, comments, feedbackType)
    .then(response => {
      console.log(response)
      dispatch(addFeedback(response.data));
    })
};

export const getFeedbacksRequest = () => (dispatch) => {
  feedbackAPI.getFeedbacks()
    .then(response => {
      console.log(response)
      dispatch(setFeedback(response.data));
    });
};
