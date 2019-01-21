// import * as Sentry from '@sentry/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';
import { IntlProvider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ru from 'react-intl/locale-data/ru';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Sentry.init({
//   dsn: 'https://7a2d9a7f0d9d42ecb8fea377cc92035e@sentry.io/1373710'
// });

addLocaleData(en);
addLocaleData(ru);

ReactDOM.render(
  <IntlProvider
    locale="ru"
    messages={{
      'nav.dashboard': 'I am in Russian.'
    }}
  >
    <App />
  </IntlProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
