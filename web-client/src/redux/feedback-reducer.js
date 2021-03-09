import { feedbackAPI } from '../api/api';

const ADD_FEEDBACK = 'ADD-FEEDBACK';
const SET_FEEDBACK = 'SET-FEEDBACK';
const SET_SUCCESS_SENDING = 'SET-SUCCESS-SENDING';

const initialState = {
  feedback: [],
  feedbackList: [],
  successSending: false
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

export default feedbackReducer;

export const addFeedback = (feedback) => ({ type: ADD_FEEDBACK, feedback });
export const setFeedback = (feedbackList) => ({ type: SET_FEEDBACK, feedbackList });
export const setSuccessSending = (successSending) => ({ type: SET_SUCCESS_SENDING, successSending });

export const sendFeedbackRequest = (name, email, comments, feedbackType) => (dispatch) => {
  feedbackAPI.sendFeedback(name, email, comments, feedbackType)
    .then(response => {
      dispatch(addFeedback(response.data));
      dispatch(setSuccessSending(true));
    });
    setTimeout(() => {
      dispatch(setSuccessSending(false));
    }, 5000)
};

export const getFeedbacksRequest = () => (dispatch) => {
  feedbackAPI.getFeedbacks()
    .then(response => {
      dispatch(setFeedback(response.data));
    });
};
