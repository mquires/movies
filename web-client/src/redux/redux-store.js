import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import moviesReducer from './movies-reducer';
import personsReducer from './persons-reducer';
import tvReducer from './tv-reducer';
import usersReducer from './users-reducer';
import feedbackReducer from './feedback-reducer';
import supportReducer from './support-reducer';
import watchLaterReducer from './watch-later-reducer';
import messagesReducer from './messages-reducer';

const reducers = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  persons: personsReducer,
  tv: tvReducer,
  users: usersReducer,
  feedback: feedbackReducer,
  support: supportReducer,
  watchLater: watchLaterReducer,
  messages: messagesReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;