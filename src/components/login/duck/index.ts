import { createStore } from 'redux';
import { IStore } from '../model';
import rootReducer from './reducers';

const initialState: IStore = {
  appMsg: '',
  loginData: {
    email: '',
    password: '',
    rememberMe: true
  },
  loginError: {
    email: '',
    password: ''
  }
};

// @ts-ignore
const store = createStore(rootReducer, initialState);
export default store;
