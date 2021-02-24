const SET_FEEDBACK = 'SET-FEEDBACK';

const initialState = {
  feedback: null
};

const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDBACK: {
      return {
        ...state,
        feedback: action.feedback
      }
    }
    default: {
      return state;
    }
  }
};

export default feedbackReducer;

export const setFeedback = (feedback) => ({ type: SET_FEEDBACK, feedback });

/*export const sendFeedbackRequest = (feedback) => (dispatch) => {
  moviesAPI.getTopRatedMovies(currentPage)
    .then(response => {
      dispatch(setTopRatedMovies(response.data.results));
    })
};*/
