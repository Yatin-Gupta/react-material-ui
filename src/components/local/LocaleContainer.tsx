import * as React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';
import * as ru from 'react-intl/locale-data/ru';
import { connect } from 'react-redux';
import Action from './duck/actions';
import LocaleView from './LocaleView';
import { ILocaleContainerProps, ILocaleContainerState, IStore } from './model';

class LocaleContainer extends React.Component<
  ILocaleContainerProps,
  ILocaleContainerState
> {
  public state = {
    langs: []
  };

  private configMessages: { [id: string]: string } = {};

  constructor(props: ILocaleContainerProps) {
    super(props);
    addLocaleData(en);
    addLocaleData(fr);
    addLocaleData(ru);
    this._changeHandler = this._changeHandler.bind(this);
  }

  public componentDidMount() {
    this.setState({ langs: ['en', 'fr', 'ru'] });
  }

  public render() {
    const lang = this.props.lang + '';
    if (lang === 'en') {
      this.configMessages = require('enConfig');
    } else if (lang === 'fr') {
      this.configMessages = require('frConfig');
    } else if (lang === 'ru') {
      this.configMessages = require('ruConfig');
    }
    return (
      <React.Fragment>
        <IntlProvider
          locale={this.props.lang + ''}
          messages={this.configMessages}
        >
          <React.Fragment>
            <LocaleView
              lang={this.props.lang}
              langs={this.state.langs}
              onChange={this._changeHandler}
            />
          </React.Fragment>
        </IntlProvider>
      </React.Fragment>
    );
  }

  private _changeHandler(name: string, value: string) {
    if (name === 'select') {
      this.props.changeLangAction(value);
    }
  }
}

const mapStateToProps = (state: IStore) => {
  return {
    lang: state.lang
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeLangAction: (lang: string) => {
      dispatch(Action.changeLangAction(lang));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleContainer);
