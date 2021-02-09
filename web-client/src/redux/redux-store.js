import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer';
import moviesReducer from './movies-reducer';

const reducers = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;