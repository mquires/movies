import { messagesAPI } from "../api/api";

const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  messages: []
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: action.message
      }
    }
    default: {
      return state;
    }
  }
};

export default messagesReducer;

export const sendMessage = (message) => ({ type: SEND_MESSAGE, message });

export const sendMessageRequest = (senderEmail, receiverEmail, message) => () => {
  messagesAPI.sendMessage(senderEmail, receiverEmail, message);
};

export const getMessagesRequest = (senderEmail, receiverEmail) => (dispatch) => {
  messagesAPI.getMessages(senderEmail, receiverEmail)
    .then(response => {
      dispatch(sendMessage(response.data));
    })
};
