import { combineReducers } from 'redux';
import { IAction } from '../model';
import Type from './types';

// old lang will come in state
// new lang will  be in action payload
const langReducer = (state: string, action: IAction) => {
  switch (action.type) {
    case Type.langUpdate:
      // store will be expecting string here.
      return action.payload.lang.concat('');
    default:
      // when store is created, state is initially undefined(even if we are providing initial state), so you need to handle that case.
      return state ? state : {};
  }
};

const rootReducer = combineReducers({
  lang: langReducer
});

export default rootReducer;
