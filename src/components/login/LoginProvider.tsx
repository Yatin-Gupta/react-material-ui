import * as React from 'react';
import { Provider } from 'react-redux';
import store from './duck';
import LoginContainer from './LoginContainer';

export interface ILoginProviderProps {}

export interface ILoginProviderState {}

class LoginProvider extends React.Component<
  ILoginProviderProps,
  ILoginProviderState
> {
  public render() {
    return (
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    );
  }
}

export default LoginProvider;
