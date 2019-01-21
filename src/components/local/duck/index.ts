import { createStore } from 'redux';
import { IStore } from '../model';
import rootReducer from './reducers';

const initialState: IStore = {
  lang: 'en'
};

// @ts-ignore
const store = createStore(rootReducer, initialState);
export default store;
