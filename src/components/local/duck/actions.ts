import Type from './types';
// import userService from '../services/userService';

const changeLangAction = (lang: string) => {
  return {
    payload: {
      lang
    },
    type: Type.langUpdate
  };
};

export default {
  changeLangAction
};
