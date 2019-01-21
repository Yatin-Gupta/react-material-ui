import { IData, IError } from '../model';
import Type from './types';
// import userService from '../services/userService';

const changeAppMsgAction = (appMsg: string) => {
  return {
    payload: {
      appMsg
    },
    type: Type.appMsgUpdate
  };
};

const changeLoginErrorAction = (error: IError) => {
  return {
    payload: error,
    type: Type.errorUpdate
  };
};

const changeLoginDataAction = (data: IData) => {
  return {
    payload: data,
    type: Type.dataUpdate
  };
};

// const signInAction = (
//   email: string,
//   password: string,
//   succMsg?: string,
//   errMsg?: string
// ) => {
//   let request = userService.signIn(email, password);
//   return (dispatch: any) => {
//     request
//       .then(data => {
//         let payload = {
//           data,
//           succMsg
//         };
//         dispatch({
//           type: Type.successLogin,
//           payload
//         });
//       })
//       .catch(error => {
//         let payload = {
//           error,
//           errMsg
//         };
//         dispatch({
//           type: Type.failLogin,
//           payload
//         });
//       });
//   };
// };

export default {
  changeAppMsgAction,
  changeLoginDataAction,
  changeLoginErrorAction
  // signInAction
};
