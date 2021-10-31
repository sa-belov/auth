import { combineReducers, createStore } from 'redux';
import authReducer from './auth-reducer';

const reducers = combineReducers({
  auth: authReducer,
});

const store = createStore(reducers);

export default store;
