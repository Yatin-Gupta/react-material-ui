export interface IAction {
  type: string;
  payload: object;
}

export interface IData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IError {
  email: string;
  password: string;
}

export interface ILoginContainerProps {
  loginData: IData;
  loginError: IError;
  changeLoginData: (data: any) => void;
  changeLoginError: (error: any) => void;
  changeAppMsg: (appMsg: string) => void;
}

export interface ILoginContainerState {}

export interface ILoginViewProps {
  loginData: IData;
  loginError: IError;
  loginHeading: string;
  onChange: (name: string, value: any) => void;
}

export interface ILoginViewState {}

export interface IStore {
  loginData: IData;
  loginError: IError;
  appMsg: string;
}
