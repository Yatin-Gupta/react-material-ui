import { combineReducers } from 'redux';
import { IAction, IData, IError } from '../model';
import Type from './types';

const appMsgReducer = (state: string, action: IAction) => {
  switch (action.type) {
    case Type.appMsgUpdate:
      // @ts-ignore
      return action.payload.appMsg;
    case Type.successLogin:
      // @ts-ignore
      return action.payload.succMsg;
    case Type.failLogin:
      // @ts-ignore
      return action.payload.errMsg;
    default:
      return state ? state : '';
  }
};

const loginDataReducer = (state: IData, action: IAction) => {
  switch (action.type) {
    case Type.dataUpdate:
      // store will get update only when new reference is returned. If action.payload directly is used, then state in store will not get updated
      return Object.assign({}, action.payload);
    default:
      // when store is created, state is initially undefined(even if we are providing initial state), so you need to handle that case.
      return state ? state : {};
  }
};

const loginErrorReducer = (state: IError, action: IAction) => {
  switch (action.type) {
    case Type.errorUpdate:
      return new Object(Object.assign({}, action.payload));
    default:
      // when store is created, state is initially undefined(even if we are providing initial state), so you need to handle that case.
      return state ? state : {};
  }
};

const rootReducer = combineReducers({
  appMsg: appMsgReducer,
  loginData: loginDataReducer,
  loginError: loginErrorReducer
});

export default rootReducer;
