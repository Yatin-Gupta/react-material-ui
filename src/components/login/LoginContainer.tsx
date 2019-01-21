import * as Sentry from '@sentry/browser';
import * as React from 'react';
import { connect } from 'react-redux';
import './assets/css/login.css';
import Action from './duck/actions';
import LoginView from './LoginView';
import { ILoginContainerProps, ILoginContainerState } from './model';

class LoginContainer extends React.Component<
  ILoginContainerProps,
  ILoginContainerState
> {
  public state = {};

  public componentDidCatch(error: any, errorInfo: any) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  public render() {
    // @ts-ignore
    // console.log(window.unknownFn()); for creating error
    return (
      <section id="login-container">
        <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
        <LoginView
          onChange={this.changeHandler}
          loginHeading={'Please fill the login form.'}
          loginData={this.props.loginData}
          loginError={this.props.loginError}
        />
      </section>
    );
  }
  private changeHandler = (name: string, value: any) => {
    // There is necessary to get new reference of data, else it will change original state(only this change will be reflected), store state will get same state as new state, which make logging difficult/useless.
    const data = { ...this.props.loginData };
    data[name] = value;
    this.props.changeLoginData(data);
  };
}

// Mapping State with Props
const mapStateToProps = (state: any) => {
  return {
    appMsg: state.appMsg,
    loginData: state.loginData,
    loginError: state.loginError
  };
};

// Mapping dispatcher to props
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeAppMsg: (appMsg: string) => {
      dispatch(Action.changeAppMsgAction(appMsg));
    },
    changeLoginData: (data: any) => {
      dispatch(Action.changeLoginDataAction(data));
    },
    changeLoginError: (error: any) => {
      dispatch(Action.changeLoginErrorAction(error));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
