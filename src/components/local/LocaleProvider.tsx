import * as React from 'react';

import { Provider } from 'react-redux';
import store from './duck';
import LocaleContainer from './LocaleContainer';
import { ILocaleProviderProps, ILocaleProviderState } from './model';

class LocaleProvider extends React.Component<
  ILocaleProviderProps,
  ILocaleProviderState
> {
  public state = {
    configMessages: {}
  };
  public render() {
    return (
      <Provider store={store}>
        <LocaleContainer />
      </Provider>
    );
  }
}

export default LocaleProvider;
